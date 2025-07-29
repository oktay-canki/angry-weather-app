import LeftPanel from "@/components/common/LeftPanel";
import RightPanel from "@/components/common/RightPanel";
import { WeatherProvider } from "@/context/WeatherContext";

export default function Home() {
  return (
    <WeatherProvider>
      <div className="flex w-full h-full">
        <LeftPanel />
        <RightPanel />
      </div>
    </WeatherProvider>
  );
}
