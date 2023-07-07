import {ChangeEvent, useEffect, useState} from "react"
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
    const [weatherInfo, setWeatherInfo] = useState(
        {
            name: '',
            main: {
                feels_like: 0,
                humidity: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0,
            },
            weather: [{
                description: '',
                icon: '',
            }],
            cod: '',
            message: ''
        }
    )
    const temperature = Math.round(weatherInfo.main.temp_max)
    const temperatureMax = Math.round(weatherInfo.main.temp_min)
    const temperatureMin = Math.round(weatherInfo.main.temp)
    const humidity = weatherInfo.main.humidity
    const feelsLike = Math.round(weatherInfo.main.feels_like)
    const icon = weatherInfo.weather[0].icon
    const description = capitalizeFirstLetter(weatherInfo.weather[0].description)


    function capitalizeFirstLetter(word: string) {
        return word.split(' ').map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' ')
    }


    useEffect(() => {
        document.title = "Weather Page";
        setStatePage('weatherpage')
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
                        </div>
                        <div className={style.date}>
                            <div>{today}th</div>
                            <div>{weatherInfo.name}</div>
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