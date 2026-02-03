import WeatherTheme from "@/enums/WeatherTheme";
import { useWeather } from "@/hooks/useWeather";

export default function Snow() {
  const { weatherData } = useWeather();
  if (!weatherData || weatherData.theme !== WeatherTheme.SNOW) return <></>;
  return (
    <div className="snow-container h-full w-full absolute z-50 top-0 left-0">
      {Array.from({ length: 100 }).map((_, i) => (
        <span
          key={i}
          className="snow-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <span
            className="snowflake"
            style={{
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            ❄
          </span>
        </span>
      ))}
    </div>
  );
}
