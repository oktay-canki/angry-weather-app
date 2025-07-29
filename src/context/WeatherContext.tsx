"use client";

import useGeolocation from "@/hooks/useGeolocation";
import { GeoPosition, LocationDisplayData } from "@/types/geo";
import { WeatherData } from "@/types/weather";
import getMoodFromStats from "@/utils/getMoodFromStats";
import getTimeOfDayFromData from "@/utils/getTimeOfDayFromData";
import getWeatherThemeFromStats from "@/utils/getWeatherThemeFromData";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type WeatherContextData = {
  position: GeoPosition | null;
  displayData: LocationDisplayData | null;
  weatherData: WeatherData | null;
  error: string | null;
  refreshPosition: () => void;
  refreshWeatherData: () => void;
};

export const WeatherContext = createContext<WeatherContextData | undefined>(
  undefined
);

type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const { position, refresh: refreshPosition } = useGeolocation();
  const [displayData, setDisplayData] = useState<LocationDisplayData | null>(
    null
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const latitude = position?.latitude;
  const longitude = position?.longitude;

  const fetchLocationWeatherData = useCallback(() => {
    if (latitude === undefined || longitude === undefined) return;

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/weather?latitude=${latitude}&longitude=${longitude}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          setError(`Failed to fetch weather data, status: ${response.status}`);
          return;
        }

        const data = await response.json();
        console.log(data);
        setDisplayData({
          country: data.sys.country,
          city: data.name,
        });

        const weatherObj = data.weather[0];

        const wd = {
          stats: {
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            wind: {
              speed: data.wind.speed,
              degree: data.wind.deg,
            },
            clouds: data.clouds.all,
          },
          description: weatherObj.description,
          icon: weatherObj.icon,
          theme: getWeatherThemeFromStats(
            weatherObj.id,
            data.main.temp,
            data.wind.speed
          ),
          timeOfDay: getTimeOfDayFromData(weatherObj.icon),
          mood: getMoodFromStats(data.main.temp, data.main.feels_like),
        } as WeatherData;
        console.log(wd);

        setWeatherData(wd);
        setError(null);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Weather fetch failed:", err);
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      }
    };

    fetchData();
  }, [latitude, longitude]);

  useEffect(() => {
    fetchLocationWeatherData();

    return () => {
      controllerRef.current?.abort();
    };
  }, [fetchLocationWeatherData]);

  return (
    <WeatherContext.Provider
      value={{
        position,
        displayData,
        weatherData,
        error,
        refreshPosition,
        refreshWeatherData: fetchLocationWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
