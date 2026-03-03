import WeatherTheme from "@/enums/WeatherTheme";
import newsData from "@/messages-data.json";

function getMessagesFromTheme(theme: WeatherTheme) {
  let allMessages = newsData.CLEAR;
  if (theme === WeatherTheme.SNOW) allMessages = newsData.SNOW;
  if (theme === WeatherTheme.PARTLY_CLOUDY)
    allMessages = newsData.PARTLY_CLOUDY;
  if (theme === WeatherTheme.CLOUDY) allMessages = newsData.CLOUDY;
  if (theme === WeatherTheme.HOT) allMessages = newsData.HOT;
  if (theme === WeatherTheme.WINDY) allMessages = newsData.WINDY;
  if (theme === WeatherTheme.FOGGY) allMessages = newsData.FOGGY;
  if (theme === WeatherTheme.LIGHT_RAIN) allMessages = newsData.LIGHT_RAIN;
  if (theme === WeatherTheme.HEAVY_RAIN) allMessages = newsData.HEAVY_RAIN;
  if (theme === WeatherTheme.THUNDER_STORM)
    allMessages = newsData.THUNDER_STORM;

  const rndIdx = Math.floor(Math.random() * allMessages.length);

  return allMessages[rndIdx];
}

export default getMessagesFromTheme;
