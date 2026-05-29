type AmbientNodes = {
  oscillators: OscillatorNode[];
  noiseSource?: AudioBufferSourceNode;
};

export class SpaceAmbientEngine {
  private ctx: AudioContext | null = null;
  private mixBus: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private nodes: AmbientNodes = { oscillators: [] };
  private playing = false;

  get isPlaying() {
    return this.playing;
  }

  async start() {
    if (this.playing) return;

    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) {
      throw new Error("Web Audio API non supportée");
    }

    this.ctx = new AudioContextClass();
    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }

    this.mixBus = this.ctx.createGain();
    this.mixBus.gain.value = 1;

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0;

    this.mixBus.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
    this.createSpaceDelay();

    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.45, now + 2);

    this.createPadLayer([55, 55.4, 82.5, 110, 110.3], 0.07);
    this.createPadLayer([164.81, 220, 329.63], 0.035);
    this.createShimmer();

    this.playing = true;
  }

  stop() {
    if (!this.ctx || !this.masterGain || !this.playing) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;

    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0, now + 1.2);

    window.setTimeout(() => {
      this.nodes.oscillators.forEach((osc) => {
        try {
          osc.stop();
        } catch {
          /* already stopped */
        }
      });
      try {
        this.nodes.noiseSource?.stop();
      } catch {
        /* already stopped */
      }

      this.nodes = { oscillators: [] };
      void ctx.close();
      this.ctx = null;
      this.mixBus = null;
      this.masterGain = null;
      this.playing = false;
    }, 1300);
  }

  setVolume(value: number) {
    if (!this.ctx || !this.masterGain || !this.playing) return;
    const clamped = Math.min(1, Math.max(0, value));
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(clamped * 0.55, this.ctx.currentTime + 0.15);
  }

  private createPadLayer(frequencies: number[], gainValue: number) {
    if (!this.ctx || !this.mixBus) return;

    const bus = this.ctx.createGain();
    bus.gain.value = gainValue;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 900;
    filter.Q.value = 0.6;

    const lfo = this.ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.04 + Math.random() * 0.03;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 500;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    bus.connect(filter);
    filter.connect(this.mixBus);

    frequencies.forEach((freq) => {
      const osc = this.ctx!.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(bus);
      osc.start();
      this.nodes.oscillators.push(osc);
    });

    this.nodes.oscillators.push(lfo);
  }

  private createShimmer() {
    if (!this.ctx || !this.mixBus) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.35;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2400;
    filter.Q.value = 8;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.012;

    const lfo = this.ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.08;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 1800;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.mixBus);

    noise.start();
    lfo.start();

    this.nodes.noiseSource = noise;
    this.nodes.oscillators.push(lfo);
  }

  private createSpaceDelay() {
    if (!this.ctx || !this.mixBus || !this.masterGain) return;

    const delay = this.ctx.createDelay(1.2);
    delay.delayTime.value = 0.45;

    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.32;

    const wet = this.ctx.createGain();
    wet.gain.value = 0.1;

    const send = this.ctx.createGain();
    send.gain.value = 0.14;

    this.mixBus.connect(send);
    send.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(this.masterGain);
  }
}
