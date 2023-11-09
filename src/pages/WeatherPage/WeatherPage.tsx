import { ChangeEvent, Component, KeyboardEvent } from 'react'
import { Button } from '../../components/Button/Button'
import style from './Weather.module.scss'
import { WeatherPagePropsType } from './WeatherPageContainer'

export class WeatherPage extends Component<WeatherPagePropsType> {
    componentDidMount() {
        document.title = 'Newsfeed'
        this.props.setHeaderTitle('newsfeed')
        this.props.getActualWeather('Minsk')
    }

    capitalizeFirstLetter = (word: string) => {
        return word
            .split(' ')
            .map(i => i.charAt(0).toUpperCase() + i.slice(1))
            .join(' ')
    }

    // temperature = Math.round(this.props.weatherData.main.temp);
    // temperatureMax= Math.round(this.props.weatherData.main.temp_max)
    // temperatureMin = Math.round(this.props.weatherData.main.temp_min);
    // humidity = this.props.weatherData.main.humidity;
    // feelsLike = Math.round(this.props.weatherData.main.feels_like);
    // icon = this.props.weatherData.weather[0].icon
    // description = this.capitalizeFirstLetter(
    //     this.props.weatherData.weather[0].description
    // );
    // windSpeed = this.props.weatherData.wind.speed.toFixed(1);

    date = new Date()
    today = this.date.toLocaleString('en-us', {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
    })
    onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.setLocationValue(event.currentTarget.value)
    }

    onClickHandler = () => {
        if (this.props.locationValue.trim() !== '') {
            this.props.getActualWeather(this.props.locationValue)
            this.props.setLocationValue('')
        }
        return
    }
    onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            if (this.props.locationValue.trim() !== '') {
                this.props.getActualWeather(this.props.locationValue)
                this.props.setLocationValue('')
            }
        }
    }

    render() {
        return (
            <div className={style.weather}>
                <span className={this.props.errorStatus ? style.error : ''}>{this.props.errorStatus}</span>
                <div className={style.weather__now}>
                    <div className={style.temperature_sensor}>{Math.round(this.props.weatherData.main.temp)}</div>
                    <div className={style.temperature_max_min}>
                        <span>{Math.round(this.props.weatherData.main.temp_max)}&deg;</span>
                        <span>{Math.round(this.props.weatherData.main.temp_min)}&deg;</span>
                    </div>
                    {this.props.weatherData.weather[0].icon && (
                        <img
                            src={`http://openweathermap.org/img/wn/${this.props.weatherData.weather[0].icon}@2x.png`}
                            alt='icon'
                        />
                    )}
                </div>
                <div className={style.weather_description}>
                    <div>{this.capitalizeFirstLetter(this.props.weatherData.weather[0].description)}</div>
                    <span>
                        Real Feel: <span>{Math.round(this.props.weatherData.main.feels_like)}&deg;</span>
                    </span>
                    <span>
                        Humidity: <span>{this.props.weatherData.main.humidity}&deg;</span>
                    </span>
                    <span>
                        Wind: <span>{this.props.weatherData.wind.speed.toFixed(1)} m/s</span>
                    </span>
                </div>
                <ul className='weekly-forecast'>
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
                <form onSubmit={e => e.preventDefault()} className={style.search_place}>
                    <input
                        className={style.input_text}
                        type='text'
                        value={this.props.locationValue}
                        onChange={this.onChangeValueHandler}
                        onKeyDown={this.onKeyDownHandler}
                        placeholder={this.props.errorStatus ? this.props.errorStatus : 'City search...'}
                    />
                    <Button className={style.search_btn} onClick={this.onClickHandler}>
                        <span>Enter</span>
                    </Button>
                </form>
            </div>
        )
    }
}
