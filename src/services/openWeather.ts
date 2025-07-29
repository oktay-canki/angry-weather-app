class OpenWeatherService {
  static async getWeatherFromPosition(latitude: number, longitude: number) {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    return response.json();
  }
}

export default OpenWeatherService;
