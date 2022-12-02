import { useState } from "react"
import axios from "axios";


let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
    baseUrl = `http://localhost:5001`;
}


function App() {

    const [weatherData, setWeatherData] = useState(null)
    // const [cityName, setCityName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I am click handler")
        axios.get(`${baseUrl}/weather`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }

    return (
      <>
      <div className="box">
          <div className="inputData">
              <input
                  type="search" className="inputField"
                  onChange={(event) => { setWeatherData (event.target.value)
                  }} />
                  <br />
                  
                  
          </div>
               <div className="mydiv">
                  <button className="mybtn" onClick={submitHandler}>Get Weather</button>
                  </div>
      

      { !weatherData ? (
          <p className='errorMsg'>No Data Found</p>
      ) : ( 

          <div>
          <div className="info">

              <h1 className="location">city:{weatherData?.city}
              </h1>

              <h2 lassName="temp">
                 Current Temp: {weatherData.temp}°C
              </h2>

              <h3 className="tempmin_max"> 
              Min: {weatherData.min}°C | Max: {weatherData.max}°C
              </h3>

          </div>

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
          </div>

      )}

          
      </div>
  </>
    );
        }
export default App;
