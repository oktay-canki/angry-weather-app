import CloudDensity from "@/enums/CloudDensity";
import WeatherTheme from "@/enums/WeatherTheme";

function getCloudDensityFromTheme(theme: WeatherTheme) {
  if (theme === WeatherTheme.PARTLY_CLOUDY) return CloudDensity.PARTIAL;
  if (theme === WeatherTheme.CLOUDY) return CloudDensity.EXTRA;

  return CloudDensity.CLEAR;
}

export default getCloudDensityFromTheme;
