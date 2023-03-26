import {ChangeEvent, useEffect, useState} from "react"
import {Button} from "../../components/Button/Button"
import style from "./Weather.module.scss"

type TemperatureType = {
    feels_like: number
    humidity: number
    temp: number
    temp_max: number
    temp_min: number
}
type Description = {
    description: string
    icon: string
}
type WeatherType = {
    name: string
    main: TemperatureType
    weather: Array<Description>
}

type WeatherPropsType = {
    setStatePage: (value: string) => void
}


export const WeatherPage = ({setStatePage}: WeatherPropsType) => {

    const API_KEY = 'bd4d8697c2213442afba131cd703e05a'

    const date = new Date();
    const today = date.toLocaleString('en-us', {day: 'numeric', weekday: 'long', month: 'long'})

    const [title, setTitle] = useState('')
    const [error, setError] = useState<boolean>(false)
    const [city, setCity] = useState('Minsk')
    const [weatherInfo, setWeatherInfo] = useState<WeatherType>(
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
                icon: ''
            }]
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

    // https://www.youtube.com/watch?v=Tln-wtsp8do&ab_channel=%D0%93%D0%BE%D1%88%D0%B0%D0%94%D1%83%D0%B4%D0%B0%D1%80%D1%8C
    useEffect(() => {
        setStatePage('Weather')

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod !== '404') {
                    setError(false)
                    setWeatherInfo(data)
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
                            <div className={style.climat}>{description}</div>
                            <span>Real Feel: <span>{feelsLike}&deg;</span></span>
                            <span>Humidity: <span>{humidity}&deg;</span></span>
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
                            <div className={style.date}>{today}th</div>
                            <div className={style.place}>{weatherInfo.name}</div>
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