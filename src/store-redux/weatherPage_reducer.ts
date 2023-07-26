import { ErrorResponse } from "@remix-run/router";
import { Dispatch } from "redux";
import { weatherAPI, WeatherType } from "../api/weather-api";
import { RequestStatus, setRequestStatus } from "../app/app-reducer";

type WeatherPageInitialStateType = typeof initialState;

const initialState = {
  weatherData: {
    status: null,
    data: {
        meddage: "",
    base: "",
    clouds: { all: 0 },
    cod: "",
    coord: { lon: 0, lat: 0 },
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: Math.round(0),
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
    },
    }
  } as WeatherType,
  locationValue: "" as string,
};

export const weatherPageReducer = (
  state: WeatherPageInitialStateType = initialState,
  action: ActionCreatorWeatherType
): WeatherPageInitialStateType => {
  switch (action.type) {
    case "SET-WEATHER":
      return { ...state, weatherData: action.weatherData };
    case "LOCATION-TEXT-VALUE":
      return { ...state, locationValue: action.value };
    default:
      return state;
  }
};

// actions
export const setWeather = (weatherData: WeatherType) =>
  ({ type: "SET-WEATHER", weatherData } as const);
export const setLocationValue = (value: string) =>
  ({ type: "LOCATION-TEXT-VALUE", value } as const);

// thunks
export const getActualWeather = (city: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    weatherAPI
      .getWeather(city)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setWeather(res.data));
          console.log(res.status);
          dispatch(setRequestStatus(RequestStatus.succeed));
        }
      })
      .catch((error) => {
        dispatch(setRequestStatus(RequestStatus.failed));
        if (error.responce.status === 404) {
          console.log(error.response.data.message);
        } else {
          console.log(error.message);
        }
        console.log(error.response)
      });
  };
};

// types
type ActionCreatorWeatherType =
  | ReturnType<typeof setWeather>
  | ReturnType<typeof setLocationValue>;
