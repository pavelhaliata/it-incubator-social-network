import { type } from "@testing-library/user-event/dist/type"
import { ChangeEvent, useEffect, useState } from "react"


type MainType = {
	feels_like: number
	temp: number
}

type WeatherType = {
	name: string
	main: MainType
}
type WeatherPropsType = {
	setStatePage: (value: string) => void
}

const API_KEY = 'bd4d8697c2213442afba131cd703e05a'

export const Weather = ({ setStatePage }: WeatherPropsType) => {
	
	const date = new Date();
	const today = date.toLocaleString('en-us', { day: 'numeric', weekday: 'long', month: 'long'})
	
	const [title, setTitle] = useState('')
	const [city, setCity] = useState('Minsk')
	const [weatherInfo, setWeatherInfo] = useState<WeatherType>(
		{
			name: '',
			main: {
				feels_like: 0,
				temp: 0
			}
		}
	)
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
		setCity(title)
		setTitle('')
	}
	return (

		<>
			<input type="text" value={title} onChange={onChangeVaueHandler} placeholder="find city" />
			<button onClick={onClickHandler}>enter</button>
			<div className="weather">
				<div className="weather__now">Temp: {Math.round(weatherInfo.main.temp)}&deg;</div>
				<div className="weather__now__description">Feels like: {Math.round(weatherInfo.main.feels_like)}&deg;</div>
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