import { WeatherType } from "../api/weather-api";


type SetWeatherAC = ReturnType<typeof setWeatherAC>
type ActionCreatorWeatherType = SetWeatherAC

type WeatherPageInitialState = typeof initialState
const initialState = {
	weatherData: {} as WeatherType
}

export const weatherPageReducer = (state: WeatherPageInitialState = initialState, action: ActionCreatorWeatherType): WeatherPageInitialState => {
	switch(action.type){
		case "SET-WEATHER": {
			return{
				...state,
				weatherData: action.weatherData
			}
		}
	}
};

export const setWeatherAC = (weatherData: WeatherType) => ({
  type:"SET-WEATHER",
  weatherData,
} as const);
