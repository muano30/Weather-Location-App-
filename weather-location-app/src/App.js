import axios from 'axios'
import City from './components/City'
import Weather from './components/Weather'
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

 const Fetch = async (e) => {
 
   e.preventDefault();
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=384a253194d1ead6ee063b51f49f6955`
    );
 
 
  setWeather(response.data);
 };

 
  // 
  return (
    <div className="App">
     <div className="card">
    
     
     {
       weather ? (<Weather weather={weather} />) : (<City setCity={setCity} Fetch={Fetch}/>)
    
    }
     </div>
    </div>
  );
}

export default App;