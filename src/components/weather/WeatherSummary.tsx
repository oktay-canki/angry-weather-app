"use client";

import { useWeather } from "@/hooks/useWeather";
import { capitalizeWords } from "@/utils/common";
import OpenWeatherIcon from "../common/OpenWeatherIcon";

const WeatherSummary = () => {
  const { weatherData } = useWeather();

  if (!weatherData) return <></>;

  return (
    <h2 className="flex text-lg items-center px-4">
      <OpenWeatherIcon
        iconCode={weatherData.icon}
        description={weatherData.description}
        width={40}
        height={40}
      />
      {capitalizeWords(weatherData.description)}
    </h2>
  );
};

export default WeatherSummary;
