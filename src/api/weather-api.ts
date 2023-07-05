import axios from "axios";

export type WeatherType = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
};

const API_KEY = "bd4d8697c2213442afba131cd703e05a";
const city = "Minsk";

export const weatherAPI = {
  getWeather() {
    return axios.get<WeatherType>(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
  },
};
