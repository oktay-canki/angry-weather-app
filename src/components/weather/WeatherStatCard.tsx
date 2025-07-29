import { ReactNode } from "react";

type WeatherStatCardProps = {
  lucideIcon: ReactNode;
  content: ReactNode;
};

const WeatherStatCard = ({ lucideIcon, content }: WeatherStatCardProps) => {
  return (
    <div className="flex shrink-0 items-center">
      <div className="flex items-center justify-center z-10 w-16 h-16 rounded-full bg-accent text-card-bg shadow-xl">
        {lucideIcon}
      </div>

      <div className="h-16 -ml-8 pl-10 pr-4 py-4 bg-card-bg rounded-r-lg">
        {content}
      </div>
    </div>
  );
};

export default WeatherStatCard;
