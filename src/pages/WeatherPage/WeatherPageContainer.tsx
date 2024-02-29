import { ComponentType, lazy } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { WeatherType } from "api/weather-api";
import { setHeaderTitle } from "app/app-reducer";
import { AppRootState } from "store-redux/redux-store";
import {
  getActualWeather,
  setLocationValue,
} from "store-redux/weatherPage_reducer";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import {
  getErrorStatus,
  getLocationValue,
  getWeatherData,
} from "./weather-selectors";
import { withLazyLoading } from "hoc/withLazyLoading";

const WeatherPage = lazy(() =>
  import("./WeatherPage").then((module) => ({ default: module.WeatherPage }))
);

const mapStateToProps = (state: AppRootState) => {
  return {
    weatherData: getWeatherData(state),
    locationValue: getLocationValue(state),
    errorStatus: getErrorStatus(state),
  };
};
export const WeatherPageContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    setHeaderTitle,
    setLocationValue,
    getActualWeather,
  }),
  withAuthRedirect,
  withLazyLoading
)(WeatherPage);

// types
type mapStatePropsType = {
  weatherData: WeatherType;
  locationValue: string;
  errorStatus: string | null;
};
type mapDispatchPropsPropsType = {
  setHeaderTitle: (title: string) => void;
  setLocationValue: (value: string) => void;
  getActualWeather: (city: string) => void;
};
export type WeatherPagePropsType = mapStatePropsType &
  mapDispatchPropsPropsType;
