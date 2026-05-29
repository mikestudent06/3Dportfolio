import { SpaceAmbientEngine } from "./spaceAmbientAudio";

const DEFAULT_AUDIO_SRC = "/audio/space-ambient.mp3";

type AudioMode = "file" | "synth";

export class AmbientAudioController {
  private audio: HTMLAudioElement | null = null;
  private synth: SpaceAmbientEngine | null = null;
  private mode: AudioMode | null = null;
  private playing = false;
  private volume = 0.7;
  private audioSrc: string;

  constructor(audioSrc = process.env.NEXT_PUBLIC_AMBIENT_AUDIO || DEFAULT_AUDIO_SRC) {
    this.audioSrc = audioSrc;
  }

  get isPlaying() {
    return this.playing;
  }

  async start() {
    if (this.playing) return;

    try {
      await this.startFromFile();
    } catch {
      await this.startFromSynth();
    }
  }

  stop() {
    this.playing = false;

    if (this.mode === "file" && this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    if (this.mode === "synth") {
      this.synth?.stop();
    }

    this.mode = null;
  }

  setVolume(value: number) {
    this.volume = Math.min(1, Math.max(0, value));

    if (this.mode === "file" && this.audio) {
      this.audio.volume = this.volume;
    }

    if (this.mode === "synth" && this.synth) {
      this.synth.setVolume(this.volume);
    }
  }

  private startFromFile(): Promise<void> {
    if (typeof window === "undefined") {
      return Promise.reject(new Error("Audio indisponible côté serveur"));
    }

    if (!this.audio) {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.preload = "auto";
    }

    this.audio.volume = this.volume;

    return new Promise((resolve, reject) => {
      if (!this.audio) {
        reject(new Error("Audio element missing"));
        return;
      }

      const audio = this.audio;

      const cleanup = () => {
        audio.removeEventListener("playing", onPlaying);
        audio.removeEventListener("error", onError);
      };

      const onPlaying = () => {
        cleanup();
        this.mode = "file";
        this.playing = true;
        resolve();
      };

      const onError = () => {
        cleanup();
        reject(new Error(`Fichier audio introuvable: ${this.audioSrc}`));
      };

      audio.addEventListener("playing", onPlaying, { once: true });
      audio.addEventListener("error", onError, { once: true });

      audio.play().catch((error) => {
        cleanup();
        reject(error);
      });
    });
  }

  private async startFromSynth() {
    if (!this.synth) {
      this.synth = new SpaceAmbientEngine();
    }

    await this.synth.start();
    this.synth.setVolume(this.volume);
    this.mode = "synth";
    this.playing = true;
  }
}
