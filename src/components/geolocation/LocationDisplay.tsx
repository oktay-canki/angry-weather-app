"use client";

import { useWeather } from "@/hooks/useLocation";

function LocationDisplay() {
  const { displayData } = useWeather();

  if (!displayData) return <></>;

  const { country, city } = displayData;

  return (
    <div>
      <h2>
        {country}, {city}
      </h2>
    </div>
  );
}

export default LocationDisplay;
