import Sun from "./Sun";
import SunRays from "./SunRays";
import Clouds from "./Clouds";
import { useWeather } from "@/hooks/useWeather";
import getCloudDensityFromTheme from "@/utils/getCloudDensityFromTheme";

const NormalWeatherScene = () => {
  const { weatherData } = useWeather();
  if (!weatherData) return <></>;

  return (
    <div className="w-full h-full bg-gradient-to-b relative from-sky-200 to-blue-100 overflow-hidden">
      <Clouds density={getCloudDensityFromTheme(weatherData.theme)} />
      <Sun />
      <SunRays />
    </div>
  );
};

export default NormalWeatherScene;
