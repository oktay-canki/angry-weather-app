import { useWeather } from "@/hooks/useWeather";
import Rain from "./Rain";
import WeatherTheme from "@/enums/WeatherTheme";
import Snow from "./Snow";
import { Fog } from "./Fog";

const BadWeatherScene = () => {
  const { weatherData } = useWeather();
  if (!weatherData) return <></>;

  return (
    <div
      className={`w-full h-full bg-gradient-to-b relative from-sky-900 to-gray-700 overflow-hidden ${weatherData.theme === WeatherTheme.THUNDER_STORM && "flash-container"}`}
    >
      <Rain />
      <Snow />
      <Fog />
    </div>
  );
};

export default BadWeatherScene;
