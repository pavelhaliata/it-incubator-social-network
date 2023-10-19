import {createSelector} from 'reselect'
import {AppRootState} from "store-redux/redux-store";
import {WeatherType} from "api/weather-api";

const weatherDataSelector = (state: AppRootState) => (state.weatherPage.weatherData)
export const locationValueSelector = (state: AppRootState) => (state.weatherPage.locationValue)
export const errorStatusSelector = (state: AppRootState) => (state.app.error)


export const getWeatherData = createSelector(weatherDataSelector, (weatherData: WeatherType) => weatherData)

export const getLocationValue = createSelector(locationValueSelector, (locationValue: string) => locationValue)

export const getErrorStatus = createSelector(errorStatusSelector, (error: string | null) => error)