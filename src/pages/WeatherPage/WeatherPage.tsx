import {ChangeEvent, useEffect, useState} from "react"
import { weatherAPI, WeatherType } from "../../api/weather-api"
import {Button} from "../../components/Button/Button"
import style from "./Weather.module.scss"


type WeatherPropsType = {
    setStatePage: (value: string) => void
}


export const WeatherPage = ({setStatePage}: WeatherPropsType) => {

    const date = new Date();
    const today = date.toLocaleString('en-us', {day: 'numeric', weekday: 'long', month: 'long'})

    const [title, setTitle] = useState('')
    const [error, setError] = useState<boolean>(false)
    const [city, setCity] = useState('Minsk')
    const [weatherInfo, setWeatherInfo] = useState<WeatherType>(
        {
            base: '',
            clouds: { all: 0 },
            cod: 0,
            coord: { lon: 0, lat: 0 },
            main: {
              feels_like: 0,
              grnd_level: 0,
              humidity: 0,
              pressure: 0,
              sea_level: 0,
              temp: 0,
              temp_max: 0,
              temp_min: 0,
            },
            name: '',
            sys: {
              country: '',
              id: 0,
              sunrise: 0,
              sunset: 0,
              type: 0,
            },
            timezone: 0,
            visibility: 0,
            weather: [
              {
                description: '',
                icon: '',
                id: 0,
                main: '',
              }
            ],
            wind: {
              deg: 0,
              gust: 0,
              speed: 0,
            },
          }
    )

    const temperature = Math.round(weatherInfo.main.temp)
    const temperatureMax = Math.round(weatherInfo.main.temp_max)
    const temperatureMin = Math.round(weatherInfo.main.temp_min)
    const humidity = weatherInfo.main.humidity
    const feelsLike = Math.round(weatherInfo.main.feels_like)
    const icon = weatherInfo.weather[0].icon
    const description = capitalizeFirstLetter(weatherInfo.weather[0].description)
    const windSpeed = weatherInfo.wind.speed.toFixed(1)

    function capitalizeFirstLetter(word: string) {
        return word.split(' ').map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' ')
    }

    useEffect(() => {
        document.title = "Weather Page";
        setStatePage('weatherpage')
        weatherAPI.getWeather()
        .then((res) => {
            if (res.status === 200) {
                setError(false)
                setWeatherInfo(res.data)
            } else {
                setError(true)
            }
        })
    }, [city])

    const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle('')
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        if (title.trim() !== '') {
            setCity(title)
            setTitle('')
        }
        return
    }

    return (

        <div>
            <div className={style.weather}>
                {error ? <span>city not found</span> :
                    <>
                        <div className={style.weather__now}>
                            <div className={style.temperature_sensor}>{temperature}&deg;</div>
                            <div className={style.temperature_max_min}>
                                <span>{temperatureMax}&deg;</span>
                                <span>{temperatureMin}&deg;</span>
                                
                            </div>
                            {icon ?
                                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                     alt="icon"/> : "...loading"}
                        </div>
                        <div className={style.weather_description}>
                            <div>{description}</div>
                            <span>Real Feel: <span>{feelsLike}&deg;</span></span>
                            <span>Humidity: <span>{humidity}&deg;</span></span>
                            <span>Wind: <span>{windSpeed} m/s</span></span>
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
                            <div >{today}th</div>
                            <div >{weatherInfo.name}</div>
                        </div>
                    </>}


                <div className={style.search_place}>
                    <input className={style.input_location} type="text" value={title} onChange={onChangeValueHandler}
                           placeholder="City search..."/>
                    <Button className={style.search_btn} callback={onClickHandler}><span>Enter</span></Button>
                </div>
            </div>
        </div>
    )
} 