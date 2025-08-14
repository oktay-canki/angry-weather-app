import CloudDensity from "@/enums/CloudDensity";
import NormalWeatherScene from "../weatherVisuals/NormalWeatherScene";

const WeatherVisual = () => {
  const scene = <NormalWeatherScene cloudDensity={CloudDensity.PARTIAL} />;

  return <div className="w-full h-full bg-pink-500">{scene}</div>;
};

export default WeatherVisual;
