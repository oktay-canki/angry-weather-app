"use client";

import { useWeather } from "@/hooks/useWeather";
import { MapPin } from "lucide-react";

function LocationDisplay() {
  const { displayData } = useWeather();

  if (!displayData) return <></>;

  const { country, city } = displayData;

  return (
    <h2 className="bg-accent flex max-w-full items-center text-xl text-card-bg gap-1 px-4 py-2 rounded-t-md">
      <MapPin className="w-7 h-7 shrink-0" />
      <span className="overflow-hidden whitespace-nowrap text-ellipsis">
        {country}, {city}
      </span>
    </h2>
  );
}

export default LocationDisplay;
