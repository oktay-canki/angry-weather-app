import WeatherStats from "../weather/WeatherStats";
import WeatherTV from "../weather/WeatherTV";

const RightPanel = () => {
  return (
    <div className="flex flex-col h-dvh w-full relative">
      <WeatherStats />
      <div className="w-full h-full p-8">
        <WeatherTV />
      </div>
    </div>
  );
};

export default RightPanel;
