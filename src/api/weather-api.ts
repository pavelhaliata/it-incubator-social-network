import axios from "axios";

const API_KEY = 'bd4d8697c2213442afba131cd703e05a';

export type WeatherType = {
    main:{
        feels_like: number
        humidity: number
        temp: number
        temp_max: number
        temp_min: number
    }
    name: string
    weather:[
        {
            description: string
            icon: string
        }
    ]
    cod: string
    message: string
}

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`,
});

export const weatherAPI = {
    getWeather(city: string){
        return  instance.get<WeatherType>(`weather?q=${city}&appid=${API_KEY}&units=metric`)
    }
}

