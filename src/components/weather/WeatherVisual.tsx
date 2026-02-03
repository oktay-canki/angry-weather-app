import NormalWeatherScene from "../weatherVisuals/NormalWeatherScene";
import { useWeather } from "@/hooks/useWeather";
import WeatherTheme from "@/enums/WeatherTheme";
import BadWeatherScene from "../weatherVisuals/BadWeatherScene";

const WeatherVisual = () => {
  const { weatherData } = useWeather();
  if (!weatherData) return <></>;

  function getSceneFromTheme(theme: WeatherTheme) {
    if (
      [
        WeatherTheme.LIGHT_RAIN,
        WeatherTheme.HEAVY_RAIN,
        WeatherTheme.THUNDER_STORM,
        WeatherTheme.FOGGY,
        WeatherTheme.SNOW,
      ].includes(theme)
    ) {
      return <BadWeatherScene />;
    }

    return <NormalWeatherScene />;
  }

  return (
    <div className="w-full h-full bg-pink-500">
      {getSceneFromTheme(weatherData.theme)}
    </div>
  );
};

export default WeatherVisual;
