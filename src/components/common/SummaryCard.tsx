import LocationDisplay from "../geolocation/LocationDisplay";
import WeatherSummary from "../weather/WeatherSummary";

const SummaryCard = () => {
  return (
    <div className="p-4">
      <div className="bg-card-bg flex flex-col w-fit min-w-xs rounded-md shadow-lg">
        <LocationDisplay />
        <WeatherSummary />
      </div>
    </div>
  );
};

export default SummaryCard;
