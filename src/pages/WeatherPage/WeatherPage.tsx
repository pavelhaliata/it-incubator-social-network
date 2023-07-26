import {ChangeEvent, Component} from "react";
import {Button} from "../../components/Button/Button";
import { getActualWeather } from "../../store-redux/weatherPage_reducer";
import style from "./Weather.module.scss";
import {WeatherPagePropsType} from "./WeatherPageContainer";


export class WeatherPage extends Component<WeatherPagePropsType> {

    componentDidMount() {
        document.title = "Weather Page";
        this.props.setHeaderTitle("weatherpage");
        this.props.getActualWeather('Minsk');
        //getActualWeather('Minsk')
    }


    capitalizeFirstLetter = (word: string) => {
        return word
            .split(" ")
            .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
            .join(" ");
    };

    temperature = Math.round(this.props.weatherData.main.temp);
    temperatureMax= Math.round(this.props.weatherData.main.temp_max)
    temperatureMin = Math.round(this.props.weatherData.main.temp_min);
    humidity = this.props.weatherData.main.humidity;
    feelsLike = Math.round(this.props.weatherData.main.feels_like);
    icon = this.props.weatherData.weather[0].icon;
    description = this.capitalizeFirstLetter(
        this.props.weatherData.weather[0].description
    );
    windSpeed = this.props.weatherData.wind.speed.toFixed(1);

    date = new Date();
    today = this.date.toLocaleString("en-us", {
        day: "numeric",
        weekday: "long",
        month: "long",
    });
    onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.setLocationValue(event.currentTarget.value);
    };
    
    onClickHandler = () => {
        if (this.props.locationValue.trim() !== "") {
            this.props.getActualWeather(this.props.locationValue);
            this.props.setLocationValue("");
        }
        return;
    };

    render() {
        return (
            <div className={style.weather}>
                <div className={style.weather__now}>
                    <div className={style.temperature_sensor}>{Math.round(this.props.weatherData.data.main.temp)}&deg;</div>
                    <div className={style.temperature_max_min}>
                        <span>{Math.round(this.props.weatherData.main.temp_max)}&deg;</span>
                        <span>{Math.round(this.props.weatherData.main.temp_min)}&deg;</span>
                    </div>
                    {this.icon && (<img src={`http://openweathermap.org/img/wn/${this.props.weatherData.weather[0].icon}@2x.png`} alt="icon"/>)}
                </div>
                <div className={style.weather_description}>
                    <div>{this.capitalizeFirstLetter(this.props.weatherData.weather[0].description)}</div>
                    <span>Real Feel: <span>{Math.round(this.props.weatherData.main.feels_like)}&deg;</span></span>
                    <span>Humidity: <span>{this.props.weatherData.main.humidity}&deg;</span></span>
                    <span>Wind: <span>{this.props.weatherData.wind.speed.toFixed(1)} m/s</span></span>
                </div>
                <ul className="weekly-forecast">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className={style.date_and_place}>
                    <div>{this.today}th</div>
                    <div>{this.props.weatherData.name}</div>
                </div>
                <div className={style.search_place}>
                    <input
                        className={style.input_text}
                        type="text"
                        value={this.props.locationValue}
                        onChange={this.onChangeValueHandler}
                        placeholder="City search..."
                    />
                    <Button className={style.search_btn} callback={this.onClickHandler}>
                        <span>Enter</span>
                    </Button>
                </div>
            </div>
        )
    }

}