import CloudDensity from "@/enums/CloudDensity";
import Sun from "./Sun";
import SunRays from "./SunRays";
import Clouds from "./Clouds";
import TimeOfDay from "@/enums/TimeOfDay";

type NormalWeatherSceneProps = {
  timeOfDay?: TimeOfDay;
  cloudDensity: CloudDensity;
};

const NormalWeatherScene = ({ cloudDensity }: NormalWeatherSceneProps) => {
  return (
    <div className="w-full h-full bg-gradient-to-b relative from-sky-200 to-blue-100 overflow-hidden">
      <Clouds density={cloudDensity} />
      <Sun />
      <SunRays />
    </div>
  );
};

export default NormalWeatherScene;
