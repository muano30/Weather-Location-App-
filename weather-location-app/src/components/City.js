import React from 'react'

const City = (props) => {
    const {setCity,Fetch} = props;
    return (
        <React.Fragment>
        <div className="city_i">
            <img src="https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/perfect-day.svg"  />
        </div>
        <span>Find weather of your city</span>
        <form className="input_field" onSubmit={Fetch}>
        <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Submit</button>
        </form>
        
        </React.Fragment>
    )
}

export default City