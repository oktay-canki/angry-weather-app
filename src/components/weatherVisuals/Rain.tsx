import WeatherTheme from "@/enums/WeatherTheme";
import { useWeather } from "@/hooks/useWeather";

const INTENSITY = {
  light: {
    numDroplets: 35,
    speed: 1,
  },
  heavy: {
    numDroplets: 80,
    speed: 0.6,
  },
};

export default function Rain() {
  const { weatherData } = useWeather();
  if (!weatherData) return <></>;

  const theme = weatherData.theme;
  const intensity =
    theme === WeatherTheme.LIGHT_RAIN
      ? INTENSITY.light
      : [WeatherTheme.HEAVY_RAIN, WeatherTheme.THUNDER_STORM].includes(theme)
        ? INTENSITY.heavy
        : undefined;

  if (!intensity) return <></>;

  return (
    <div className="rain-container h-full w-full absolute z-50 top-0 left-0">
      {Array.from({ length: intensity.numDroplets }).map((_, i) => (
        <span
          key={i}
          className="drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${intensity.speed + Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
