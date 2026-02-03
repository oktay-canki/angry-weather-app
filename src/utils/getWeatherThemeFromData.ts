import WeatherTheme from "@/enums/WeatherTheme";

function getWeatherThemeFromStats(
  code: number,
  temp: number,
  windSpeed: number,
): WeatherTheme {
  if (code >= 200 && code < 300) return WeatherTheme.THUNDER_STORM;
  if (code >= 300 && code < 400) return WeatherTheme.LIGHT_RAIN;
  if (code >= 500 && code <= 504)
    return code <= 501 ? WeatherTheme.LIGHT_RAIN : WeatherTheme.HEAVY_RAIN;
  if (code >= 511 && code < 700) return WeatherTheme.SNOW;
  if (code >= 700 && code < 800) {
    if (code === 771 || code === 781 || windSpeed > 10)
      return WeatherTheme.WINDY;
    return WeatherTheme.FOGGY;
  }
  if (code === 800) return WeatherTheme.CLEAR;
  if (code === 801 || code === 802) return WeatherTheme.PARTLY_CLOUDY;
  if (code === 803 || code === 804) return WeatherTheme.CLOUDY;
  if (temp > 35) return WeatherTheme.HOT;

  return WeatherTheme.DEFAULT;
}

export default getWeatherThemeFromStats;
