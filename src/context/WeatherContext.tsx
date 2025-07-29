"use client";

import useGeolocation from "@/hooks/useGeolocation";
import { GeoPosition, LocationDisplayData } from "@/types/geo";
import { WeatherData } from "@/types/weather";
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
          throw new Error(`Fetch error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setDisplayData({
          country: data.sys.country,
          city: data.name,
        });
        // setWeatherData(data); // TODO: set weather data and displayData
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
