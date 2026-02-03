import WeatherTheme from "@/enums/WeatherTheme";
import newsData from "@/news-data.json";

function getNewsFromTheme(theme: WeatherTheme) {
  if (theme === WeatherTheme.SNOW) return newsData.SNOW;
  if (theme === WeatherTheme.PARTLY_CLOUDY) return newsData.PARTLY_CLOUDY;
  if (theme === WeatherTheme.CLOUDY) return newsData.CLOUDY;
  if (theme === WeatherTheme.HOT) return newsData.HOT;
  if (theme === WeatherTheme.WINDY) return newsData.WINDY;
  if (theme === WeatherTheme.FOGGY) return newsData.FOGGY;
  if (theme === WeatherTheme.LIGHT_RAIN) return newsData.LIGHT_RAIN;
  if (theme === WeatherTheme.HEAVY_RAIN) return newsData.HEAVY_RAIN;
  if (theme === WeatherTheme.THUNDER_STORM) return newsData.THUNDER_STORM;

  return newsData.CLEAR;
}

export default getNewsFromTheme;
