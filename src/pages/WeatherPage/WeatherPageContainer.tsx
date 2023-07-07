import { connect } from "react-redux";
import { Dispatch } from "redux";
import { WeatherType } from "../../api/weather-api";
import { headerTitleAC } from "../../redux/headerComponent_reducer";
import { StateType } from "../../redux/redux-store";
import { getActualWeatherTC } from "../../redux/weatherPage_reducer";
import { WeatherPage } from "./WeatherPage";

type mapStatePropsType = {
  weatherData: WeatherType;
};
type mapDispatchPropsPropsType = {
  setupHeaderTitle: (title: string) => void;
  getActualWeatherData: (city: string) => void;
};
export type WeatherPagePropsType = mapStatePropsType &
  mapDispatchPropsPropsType;

const mapStateToProps = (state: StateType) => {
  return {
    weatherData: state.weatherPage.weatherData,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsPropsType => {
  return {
    getActualWeatherData: (city: string) => {dispatch(getActualWeatherTC(city));},
    setupHeaderTitle: (title: string) => {dispatch(headerTitleAC(title));},
  };
};

export const WeatherPageContainer = connect(mapStateToProps,mapDispatchToProps)(WeatherPage);
