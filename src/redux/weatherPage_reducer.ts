import { WeatherType } from "../api/weather-api";

type SetWeatherAC = ReturnType<typeof setWeatherAC>;
type ActionCreatorWeatherType = SetWeatherAC;

type WeatherPageInitialStateType = typeof initialState;

const initialState = {
  weatherData: {
    base: "",
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  main: {
    feels_like: 0,
    grnd_level: 0,
    humidity: 0,
    pressure: 0,
    sea_level: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: "",
  sys: {
    country: "",
    id: 0,
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  visibility: 0,
  weather: [
    {
      description: "",
      icon: "",
      id: 0,
      main: "",
    },
  ],
  wind: {
    deg: 0,
    gust: 0,
    speed: 0,
  }
    } as WeatherType,
};

export const weatherPageReducer = (state: WeatherPageInitialStateType = initialState, action: ActionCreatorWeatherType): WeatherPageInitialStateType => {
  switch (action.type) {
    case "SET-WEATHER": {
      return {
        ...state,
        weatherData: action.weatherData,
      };
    }
    default:
      return state;
  }
};

export const setWeatherAC = (weatherData: WeatherType) =>
  ({
    type: "SET-WEATHER",
    weatherData,
  } as const);
