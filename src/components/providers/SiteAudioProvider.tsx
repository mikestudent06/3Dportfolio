"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AlertCircle, Music2, Volume2, VolumeX } from "lucide-react";
import { AmbientAudioController } from "@/lib/ambientAudio";

const STORAGE_KEY = "portfolio-ambient-music";

type SiteAudioContextValue = {
  playing: boolean;
  volume: number;
  error: string | null;
  toggle: () => Promise<void>;
  setVolume: (value: number) => void;
};

const SiteAudioContext = createContext<SiteAudioContextValue | null>(null);

export function useSiteAudio() {
  const ctx = useContext(SiteAudioContext);
  if (!ctx) {
    throw new Error("useSiteAudio must be used within SiteAudioProvider");
  }
  return ctx;
}

function BackgroundMusicControl() {
  const { playing, volume, error, toggle, setVolume } = useSiteAudio();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-3"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {expanded && playing && (
        <div className="page-card card px-4 py-3 min-w-[220px] animate-page-in">
          <label htmlFor="ambient-volume" className="text-xs text-white-50 uppercase tracking-wide">
            Volume ambiance
          </label>
          <input
            id="ambient-volume"
            type="range"
            min={0}
            max={100}
            value={Math.round(volume * 100)}
            onChange={(e) => setVolume(Number(e.target.value) / 100)}
            className="ambient-slider w-full mt-2"
            aria-label="Volume de l'ambiance sonore"
          />
        </div>
      )}

      {error && (
        <p className="max-w-[240px] text-xs text-red-300 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2 flex gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={() => void toggle()}
        className={`group relative p-4 rounded-full border shadow-lg transition-all duration-300 hover:scale-110 ${
          playing
            ? "bg-white text-black border-white"
            : "bg-black-100 text-white border-black-50 hover:border-white/30"
        }`}
        aria-label={playing ? "Couper l'ambiance sonore" : "Lancer l'ambiance sonore spatiale"}
        aria-pressed={playing}
      >
        {playing && (
          <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-40" />
        )}
        {playing ? <Volume2 className="w-5 h-5 relative z-10" /> : <Music2 className="w-5 h-5 relative z-10" />}
      </button>

      {!playing && (
        <span className="hidden md:block text-xs text-white-50 bg-black-100/90 border border-black-50 rounded-full px-3 py-1 pointer-events-none">
          Ambiance 3D
        </span>
      )}
    </div>
  );
}

export function SiteAudioProvider({ children }: { children: ReactNode }) {
  const controllerRef = useRef<AmbientAudioController | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [wasEnabled, setWasEnabled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setWasEnabled(localStorage.getItem(STORAGE_KEY) === "on");
  }, []);

  useEffect(() => {
    return () => {
      controllerRef.current?.stop();
    };
  }, []);

  const setVolume = useCallback((value: number) => {
    setVolumeState(value);
    controllerRef.current?.setVolume(value);
  }, []);

  const toggle = useCallback(async () => {
    if (!controllerRef.current) {
      controllerRef.current = new AmbientAudioController();
    }

    const controller = controllerRef.current;
    setError(null);

    if (controller.isPlaying) {
      controller.stop();
      setPlaying(false);
      localStorage.setItem(STORAGE_KEY, "off");
      return;
    }

    try {
      await controller.start();
      controller.setVolume(volume);
      setPlaying(true);
      setWasEnabled(false);
      localStorage.setItem(STORAGE_KEY, "on");
    } catch (err) {
      console.error("Impossible de démarrer l'ambiance:", err);
      setError("Impossible de lancer l'audio. Cliquez à nouveau ou ajoutez un MP3 dans public/audio/.");
      setPlaying(false);
    }
  }, [volume]);

  return (
    <SiteAudioContext.Provider value={{ playing, volume, error, toggle, setVolume }}>
      {children}
      <BackgroundMusicControl />
      {wasEnabled && !playing && (
        <button
          type="button"
          onClick={() => void toggle()}
          className="fixed bottom-24 left-8 z-50 hidden md:flex items-center gap-2 text-xs text-white-50 bg-black-100 border border-black-50 rounded-full px-4 py-2 hover:border-white/30 transition-colors"
        >
          <VolumeX className="w-3.5 h-3.5" />
          Reprendre l&apos;ambiance
        </button>
      )}
    </SiteAudioContext.Provider>
  );
}
