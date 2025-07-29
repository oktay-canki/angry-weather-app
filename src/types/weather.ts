import TimeOfDay from "@/enums/TimeOfDay";
import WeatherMood from "@/enums/WeatherMood";
import WeatherTheme from "@/enums/WeatherTheme";

export type WeatherData = {
  stats: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    wind: {
      speed: number;
      degree: number;
    };
    clouds: number;
  };
  description: string;
  icon: string;
  theme: WeatherTheme;
  timeOfDay: TimeOfDay;
  mood: WeatherMood;
};
