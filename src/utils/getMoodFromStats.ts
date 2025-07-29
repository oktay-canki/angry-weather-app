import WeatherMood from "@/enums/WeatherMood";

function getMoodFromStats(temp: number, feelsLike: number): WeatherMood {
  if (feelsLike >= 32 || temp >= 32) {
    return WeatherMood.SCORCHING;
  }

  if (temp < 0) {
    return WeatherMood.FROST;
  }

  if (temp >= 0 && temp < 10) {
    return WeatherMood.COLD_BREEZE;
  }

  if (temp >= 10 && temp < 25) {
    return WeatherMood.NEUTRAL;
  }

  if (temp >= 25 && temp < 32) {
    return WeatherMood.SUNNY;
  }

  return WeatherMood.DEFAULT;
}

export default getMoodFromStats;
