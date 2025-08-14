import WeatherTheme from "@/enums/WeatherTheme";
import { useCallback, useEffect, useRef, useState } from "react";

const audioMap: Partial<Record<WeatherTheme, string>> = {
  [WeatherTheme.DEFAULT]: "sounds/static.mp3",
  [WeatherTheme.CLEAR]: "sounds/sunny.mp3",
  [WeatherTheme.PARTLY_CLOUDY]: "sounds/sunny.mp3",
  [WeatherTheme.CLOUDY]: "sounds/sunny.mp3",
  [WeatherTheme.LIGHT_RAIN]: "sounds/light-rain.mp3",
  [WeatherTheme.HEAVY_RAIN]: "sounds/heavy-rain.mp3",
  [WeatherTheme.THUNDER_STORM]: "sounds/storm.mp3",
  [WeatherTheme.SNOW]: "sounds/wind-blow.mp3",
  [WeatherTheme.FOGGY]: "sounds/traffic.mp3",
  [WeatherTheme.WINDY]: "sounds/wind-blow.mp3",
  [WeatherTheme.HOT]: "sounds/fire.mp3",
};

function useWeatherAudio(currentTheme: WeatherTheme) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current.load();
      audioRef.current = null;
      setIsPlaying(false);
    }

    if (currentTheme === WeatherTheme.DEFAULT) return;

    const src = audioMap[currentTheme];
    if (!src) return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 1;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.warn("Audio play failed:", err));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [currentTheme]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Audio play failed:", err));
    }
  }, []);

  return {
    isPlaying,
    pause,
    play,
  };
}

export default useWeatherAudio;
