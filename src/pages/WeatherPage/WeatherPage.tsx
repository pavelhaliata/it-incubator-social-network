import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import style from "./Weather.module.scss";
import { WeatherPagePropsType } from "./WeatherPageContainer";

export const WeatherPage = ({setupHeaderTitle, getActualWeatherData, weatherData}: WeatherPagePropsType) => {

  useEffect(() => {
    document.title = "Weather Page";
    setupHeaderTitle("weatherpage");
    getActualWeatherData('Minsk');

  }, []);

  const [title, setTitle] = useState("");
  const [error, setError] = useState<boolean>(false);
  
  const capitalizeFirstLetter = (word: string) => {
    return word
      .split(" ")
      .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
      .join(" ");
  };

  const temperature = Math.round(weatherData.main.temp);
  const temperatureMax = Math.round(weatherData.main.temp_max);
  const temperatureMin = Math.round(weatherData.main.temp_min);
  const humidity = weatherData.main.humidity;
  const feelsLike = Math.round(weatherData.main.feels_like);
  const icon = weatherData.weather[0].icon;
  const description = capitalizeFirstLetter(
    weatherData.weather[0].description
  );
  const windSpeed = weatherData.wind.speed.toFixed(1);

  const date = new Date();
  const today = date.toLocaleString("en-us", {
    day: "numeric",
    weekday: "long",
    month: "long",
  });

  const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle("");
    setTitle(event.currentTarget.value);
  };
  const onClickHandler = () => {
    if (title.trim() !== "") {
      getActualWeatherData(title);
      setTitle("");
    }
    return;
  };
  

  return (
    <div>
      <div className={style.weather}>
            <div className={style.weather__now}>
              <div className={style.temperature_sensor}>{temperature}&deg;</div>
              <div className={style.temperature_max_min}>
                <span>{temperatureMax}&deg;</span>
                <span>{temperatureMin}&deg;</span>
              </div>
              {icon ? (
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="icon"
                />
              ) : (
                "...loading"
              )}
            </div>
            <div className={style.weather_description}>
              <div>{description}</div>
              <span>
                Real Feel: <span>{feelsLike}&deg;</span>
              </span>
              <span>
                Humidity: <span>{humidity}&deg;</span>
              </span>
              <span>
                Wind: <span>{windSpeed} m/s</span>
              </span>
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
              <div>{today}th</div>
              <div>{weatherData.name}</div>
            </div>
        <div className={style.search_place}>
          <input
            className={style.input_location}
            type="text"
            value={title}
            onChange={onChangeValueHandler}
            placeholder="City search..."
          />
          <Button className={style.search_btn} callback={onClickHandler}>
            <span>Enter</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
