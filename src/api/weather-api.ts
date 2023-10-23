import axios from 'axios'

const instanse = axios.create({
    baseURL: process.env.REACT_APP_BASE_WEATHER_URL,
})

export const weatherAPI = {
    getWeather(city: string) {
        return instanse.get<WeatherType>(
            `weather?q=${city}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric`,
        )
    },
}

// types
export type WeatherType = {
    base: string
    clouds: { all: number }
    cod: number | string
    coord: { lon: number; lat: number }
    main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_max: number
        temp_min: number
    }
    name: string
    sys: {
        country: string
        id: number
        sunrise: number
        sunset: number
        type: number
    }
    timezone: number
    visibility: number
    weather: [
        {
            description: string
            icon: string
            id: number
            main: string
        },
    ]
    wind: {
        deg: number
        gust: number
        speed: number
    }
}

export interface ResponseWeatherType {
    data: WeatherType
    status: number | null
}
