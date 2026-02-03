import WeatherTheme from "@/enums/WeatherTheme";
import { useWeather } from "@/hooks/useWeather";

export function Fog() {
  const { weatherData } = useWeather();
  if (!weatherData || weatherData.theme !== WeatherTheme.FOGGY) return <></>;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="fog -top-28"
        style={{
          animationDuration: `20s`,
        }}
      />
      <div
        className="fog -top-28 left-28"
        style={{
          animationDuration: `23s`,
        }}
      />
      <div
        className="fog -top-28 -left-28"
        style={{
          animationDuration: `30s`,
        }}
      />
      <div
        className="fog -top-14 -left-14"
        style={{
          animationDuration: `20s`,
        }}
      />
      <div
        className="fog top-14 left-10"
        style={{
          animationDuration: `25s`,
        }}
      />
      <div
        className="fog top-28 left-24"
        style={{
          animationDuration: `30s`,
        }}
      />

      <div
        className="fog top-20 left-20"
        style={{
          animationDuration: `20s`,
        }}
      />
      <div
        className="fog top-5 left-5"
        style={{
          animationDuration: `25s`,
        }}
      />
      <div
        className="fog top-5 left-5"
        style={{
          animationDuration: `35s `,
        }}
      />
    </div>
  );
}
