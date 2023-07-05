import { connect } from "react-redux";
import { Dispatch } from "redux";
import { WeatherType } from "../../api/weather-api";
import { StateType } from "../../redux/redux-store";
import { setWeatherAC } from "../../redux/weatherPage_reducer";
import { WeatherPage } from "./WeatherPage";


type mapStatePropsType = {
	weatherData: WeatherType
}
type mapDispatchPropsPropsType = {
  setWeatherData: (weatherData: WeatherType) => void
}
export type WeatherPagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: StateType) => {
  return {
	weatherData: state.weatherPage.weatherData
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsPropsType => {
  return {
    setWeatherData: (weatherData: WeatherType) => {dispatch(setWeatherAC(weatherData));},
  };
};

export const ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(WeatherPage);