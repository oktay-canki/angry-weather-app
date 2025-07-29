import WeatherStats from "../weather/WeatherStats";
import WeatherVisual from "../weather/WeatherVisual";

const RightPanel = () => {
  return (
    <div className="flex flex-col h-dvh w-full relative">
      <WeatherStats />
      <WeatherVisual />
    </div>
  );
};

export default RightPanel;
