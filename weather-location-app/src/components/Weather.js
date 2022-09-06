import React from 'react'

export const Weatherimg = {
wind:"https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/wind.svg",
sunrise:"https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/temp.svg",
sunset:"https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/temp.svg",
humidity:"https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/humidity.svg",
pressure:"https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/pressure.svg"
}
export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};
const WeatherInfoComponent = (props) => {
    const {name , value} = props;
    return(
        <React.Fragment>
          <div className="InfoContainer">
           <img className="WeatherIcon" src={Weatherimg[name]} alt="" />
           <div className="WeatherInfoLabel">
           {value}
           <span>
           {name}
           </span>
           </div>
          </div>
        </React.Fragment>
    )
}
function Weather(props) {
  
    const {weather} = props;
    console.log(props)
    const isDay = weather.weather[0].icon.includes("d");
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <React.Fragment>
        <div className="city_w">
        <span className="temp">{`${Math.floor(weather.main.temp - 273)}C`}<span className="wheather">| {`${weather.weather[0].description}`}</span></span> 
            {/* <img src={WeatherIcons[weather.weather[0].icon]}  /> */}
            <img src="https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/perfect-day.svg" />
        </div>
        <span className="City_name">{`${weather.name},${weather.sys.country}`}</span>
        <span className="City_weather_info">Weather Info</span>
      <div className="weatherInfoContainer" >
         <WeatherInfoComponent name={isDay?"sunset":"sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
         <WeatherInfoComponent name="humidity" value={weather.main.humidity}/>
         <WeatherInfoComponent name="wind" value={weather.wind.speed}/>
         <WeatherInfoComponent name="pressure" value={weather.main.pressure}/>
      </div>
        </React.Fragment>
    )
}

export default Weather