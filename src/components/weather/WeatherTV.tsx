"use client";
import useWeatherAudio from "@/hooks/useWeatherAudio";
import WeatherVisual from "./WeatherVisual";
import { useWeather } from "@/hooks/useWeather";
import WeatherTheme from "@/enums/WeatherTheme";
import { Volume2, VolumeOff } from "lucide-react";

const WeatherTV = () => {
  const { weatherData } = useWeather();

  const { isPlaying, play, pause } = useWeatherAudio(
    weatherData && weatherData.theme ? weatherData.theme : WeatherTheme.DEFAULT,
  );

  const handleAudioClick = () => {
    if (isPlaying) pause();
    else play();
  };

  return (
    <div className="weather-tv">
      <WeatherVisual />
      <div className="w-full pt-2 flex justify-between item-center">
        <button
          className="bg-bg px-6 py-4 cursor-pointer"
          onClick={handleAudioClick}
        >
          {isPlaying ? <Volume2 /> : <VolumeOff className="text-red-600" />}
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="w-7 h-7 bg-red-600 rounded animate-pulse"></div>
          <span className="text-red-700 text-2xl tracking-wider">LIVE</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherTV;
