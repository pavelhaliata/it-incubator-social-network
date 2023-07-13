import { connect } from "react-redux";
import { Dispatch } from "redux";
import { WeatherType } from "../../api/weather-api";
import { setHeaderTitle } from "../../app/app-reducer";
import { StateType } from "../../redux/redux-store";
import {getActualWeatherTC, locationValueAC} from "../../redux/weatherPage_reducer";
import { WeatherPage } from "./WeatherPage";

type mapStatePropsType = {
  weatherData: WeatherType;
  locationValue: string
};
type mapDispatchPropsPropsType = {
  setHeaderTitle: (title: string) => void;
  setLocationValue: (value: string) => void;
  getActualWeatherData: (city: string) => void;
};
export type WeatherPagePropsType = mapStatePropsType &
  mapDispatchPropsPropsType;

const mapStateToProps = (state: StateType) => {
  return {
    weatherData: state.weatherPage.weatherData,
    locationValue: state.weatherPage.locationValue
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsPropsType => {
  return {
    setHeaderTitle,
    setLocationValue: (value: string) => {dispatch(locationValueAC(value))},
    getActualWeatherData: (city: string) => {dispatch(getActualWeatherTC(city))},
  };
};

export const WeatherPageContainer = connect(mapStateToProps,mapDispatchToProps)(WeatherPage);
