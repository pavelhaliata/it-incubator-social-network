import axios from "axios";

const API_KEY = "bd4d8697c2213442afba131cd703e05a";

const instanse = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`
})

export const weatherAPI = {
  getWeather(city: string) {
    return instanse.get<any>(
      `weather?q=${city}&appid=${API_KEY}&units=metric`
    );
  },
};

// types 
export type WeatherType = {
  base: string;
  clouds: { all: number };
  cod: number | string;
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