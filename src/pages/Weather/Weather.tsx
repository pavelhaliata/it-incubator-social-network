import { ChangeEvent, useEffect, useState } from "react"

declare module namespace {

	export interface Coord {
		lon: number;
		lat: number;
	}

	export interface Weather {
		id: number;
		main: string;
		description: string;
		icon: string;
	}

	export interface Main {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	}

	export interface Wind {
		speed: number;
		deg: number;
	}

	export interface Clouds {
		all: number;
	}

	export interface Sys {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	}

	export interface RootObject {
		coord: Coord;
		weather: Weather[];
		base: string;
		main: Main;
		visibility: number;
		wind: Wind;
		clouds: Clouds;
		dt: number;
		sys: Sys;
		timezone: number;
		id: number;
		name: string;
		cod: number;
	}

}



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


export const Weather = ({ setStatePage }: WeatherPropsType) => {
	const API_KEY = 'bd4d8697c2213442afba131cd703e05a'
	
	const [title, setTitle] = useState('')
	const [city, setCity] = useState('minsk')
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
			<p>Город: {weatherInfo.name}</p>
			<p>Температура: {Math.round(weatherInfo.main.temp)}&deg;</p>
			<p>Ощущается как: {Math.round(weatherInfo.main.feels_like)}&deg;</p>

			<input type="text" onChange={onChangeVaueHandler} placeholder="enter city" />
			<button onClick={onClickHandler}>enter</button>

		</>
	)
} 