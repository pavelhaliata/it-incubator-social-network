import { connect } from "react-redux";
import { Dispatch } from "redux";
import { WeatherType } from "../../api/weather-api";
import { setHeaderTitle } from "../../app/app-reducer";
import { StateType } from "../../store-redux/redux-store";
import {getActualWeather, setLocationValue} from "../../store-redux/weatherPage_reducer";
import { WeatherPage } from "./WeatherPage";

const mapStateToProps = (state: StateType) => {
  return {
    weatherData: state.weatherPage.weatherData,
    locationValue: state.weatherPage.locationValue
  };
};

export const WeatherPageContainer = connect(mapStateToProps,{
  setHeaderTitle,
  setLocationValue,
  getActualWeather,
})(WeatherPage);


// types
type mapStatePropsType = {
  weatherData: WeatherType;
  locationValue: string
};
type mapDispatchPropsPropsType = {
  setHeaderTitle: (title: string) => void;
  setLocationValue: (value: string) => void;
  getActualWeather: (city: string) => void;
};
export type WeatherPagePropsType = mapStatePropsType &
  mapDispatchPropsPropsType;