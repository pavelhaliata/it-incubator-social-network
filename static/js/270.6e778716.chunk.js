"use strict";(self.webpackChunkit_incubator_social_network=self.webpackChunkit_incubator_social_network||[]).push([[270],{2270:(e,t,s)=>{s.r(t),s.d(t,{WeatherPage:()=>w});var a=s(2791),r=s(9609);const i="Weather_weather__2vGju",n="Weather_weather__now__YWtjb",h="Weather_temperature_sensor__HESLw",o="Weather_temperature_max_min__9wMNZ",p="Weather_weather_description__89Qy2",l="Weather_date_and_place__0l8re",c="Weather_search_place__eer44",d="Weather_input_text__K9Rxp",_="Weather_search_btn__4NsoE",u="Weather_error__jlarA";var m=s(184);class w extends a.Component{constructor(){super(...arguments),this.capitalizeFirstLetter=e=>e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),this.date=new Date,this.today=this.date.toLocaleString("en-us",{day:"numeric",weekday:"long",month:"long"}),this.onChangeValueHandler=e=>{this.props.setLocationValue(e.currentTarget.value)},this.onClickHandler=()=>{""!==this.props.locationValue.trim()&&(this.props.getActualWeather(this.props.locationValue),this.props.setLocationValue(""))},this.onKeyDownHandler=e=>{e.ctrlKey&&"Enter"===e.key&&""!==this.props.locationValue.trim()&&(this.props.getActualWeather(this.props.locationValue),this.props.setLocationValue(""))}}componentDidMount(){document.title="Newsfeed",this.props.setHeaderTitle("newsfeed"),this.props.getActualWeather("Minsk")}render(){return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("span",{className:this.props.errorStatus?u:"",children:this.props.errorStatus}),(0,m.jsxs)("div",{className:n,children:[(0,m.jsx)("div",{className:h,children:Math.round(this.props.weatherData.main.temp)}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsxs)("span",{children:[Math.round(this.props.weatherData.main.temp_max),"\xb0"]}),(0,m.jsxs)("span",{children:[Math.round(this.props.weatherData.main.temp_min),"\xb0"]})]}),this.props.weatherData.weather[0].icon&&(0,m.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(this.props.weatherData.weather[0].icon,"@2x.png"),alt:"icon"})]}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("div",{children:this.capitalizeFirstLetter(this.props.weatherData.weather[0].description)}),(0,m.jsxs)("span",{children:["Real Feel:"," ",(0,m.jsxs)("span",{children:[Math.round(this.props.weatherData.main.feels_like),"\xb0"]})]}),(0,m.jsxs)("span",{children:["Humidity: ",(0,m.jsxs)("span",{children:[this.props.weatherData.main.humidity,"\xb0"]})]}),(0,m.jsxs)("span",{children:["Wind:"," ",(0,m.jsxs)("span",{children:[this.props.weatherData.wind.speed.toFixed(1)," m/s"]})]})]}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsxs)("div",{children:[this.today,"th"]}),(0,m.jsx)("div",{children:this.props.weatherData.name})]}),(0,m.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:c,children:[(0,m.jsx)("input",{className:d,type:"text",value:this.props.locationValue,onChange:this.onChangeValueHandler,onKeyDown:this.onKeyDownHandler,placeholder:this.props.errorStatus?this.props.errorStatus:"City search..."}),(0,m.jsx)(r.z,{label:"Find city",className:_,onClick:this.onClickHandler})]})]})}}}}]);
//# sourceMappingURL=270.6e778716.chunk.js.map