import { type } from "@testing-library/user-event/dist/type"
import { ChangeEvent, useEffect, useState } from "react"


type TemperatureType = {
	feels_like: number
	temp: number
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


export const Weather = ({ setStatePage }: WeatherPropsType) => {

	const API_KEY = 'bd4d8697c2213442afba131cd703e05a'
	const date = new Date();
	const today = date.toLocaleString('en-us', { day: 'numeric', weekday: 'long', month: 'long' })

	const [title, setTitle] = useState('')
	const [city, setCity] = useState('Minsk')
	const [weatherInfo, setWeatherInfo] = useState<WeatherType>(
		{
			name: '',
			main: {
				feels_like: 0,
				temp: 0
			},
			weather: [{
				description: '',
				icon: ''
			}]
		}
	)
	const temperature = Math.round(weatherInfo.main.temp)
	const feelsLike = Math.round(weatherInfo.main.feels_like)
	const description = weatherInfo.weather[0].description
	const icon = weatherInfo.weather[0].icon
		console.log(weatherInfo)
	// https://www.youtube.com/watch?v=Tln-wtsp8do&ab_channel=%D0%93%D0%BE%D1%88%D0%B0%D0%94%D1%83%D0%B4%D0%B0%D1%80%D1%8C
	// console.log(weatherInfo)

	useEffect(() => {
		setStatePage('Weather')
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
			.then(response => response.json())
			.then(data => setWeatherInfo(data))

	}, [city])

	const onChangeVaueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}
	const onClickHandler = () => {
		if (title.length !== 0) {
			setCity(title.trim())
		}
		setTitle('')
	}
	return (

		<>
			<input type="text" value={title} onChange={onChangeVaueHandler} placeholder="Search city" />
			<button onClick={onClickHandler}>enter</button>
			<div className="weather">
				<div className="weather__now">Temp: {temperature}&deg;</div>
				<div className="weather__now__description">Real Feel: {feelsLike}&deg;</div>
				<div>{description}</div>
				<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
				<ul className="weekly-forecast">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div className="date_and_place">
					<div className="date">{today}th</div>
					<div className="place">{weatherInfo.name}</div>
				</div>
			</div>
		</>
	)
} 