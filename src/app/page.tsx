import LocationDisplay from "@/components/geolocation/LocationDisplay";
import { WeatherProvider } from "@/context/WeatherContext";

export default function Home() {
  return (
    <WeatherProvider>
      <LocationDisplay />
    </WeatherProvider>
  );
}
