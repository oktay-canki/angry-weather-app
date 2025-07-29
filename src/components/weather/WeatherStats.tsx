"use client";
import { Cloudy, Droplets, ThermometerSun, Wind } from "lucide-react";
import WeatherStatCard from "./WeatherStatCard";
import { useWeather } from "@/hooks/useLocation";

const WeatherStats = () => {
  const { weatherData } = useWeather();

  if (!weatherData) return <></>;

  const stats = weatherData.stats;

  return (
    <div className="flex w-full h-fit items-center justify-end px-10 py-4 gap-4 z-20">
      <WeatherStatCard
        lucideIcon={<ThermometerSun size={30} />}
        content={
          <p className="text-3xl font-semibold">
            {stats.temperature} <span className="text-xl text-muted">°C</span>
          </p>
        }
      />
      <WeatherStatCard
        lucideIcon={<Droplets size={30} />}
        content={
          <p className="text-3xl font-semibold">
            {stats.humidity} <span className="text-xl text-muted">%</span>
          </p>
        }
      />
      <WeatherStatCard
        lucideIcon={<Wind size={30} />}
        content={
          <p className="text-3xl font-semibold">
            {stats.wind.speed} <span className="text-xl text-muted">m/s</span>
          </p>
        }
      />
      <WeatherStatCard
        lucideIcon={<Cloudy size={30} />}
        content={
          <p className="text-3xl font-semibold">
            {stats.clouds} <span className="text-xl text-muted">%</span>
          </p>
        }
      />
    </div>
  );
};

export default WeatherStats;
