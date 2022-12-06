import React, { useState, useEffect} from 'react'
import axios from 'axios'
import "./weather.css"

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=f925401e993972610ffb22e896bfd386'



const Weather = () => {




    const [data, setData] = useState(null) 

   useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((error)=> {
        console.log(error)

    }) 
   }, [])

if(!data) return null; 

  return (
<div> 
<div id="main">
        <h1>Bienvenue à votre site de météo favoris ! </h1>
        <p>Ce site pour permet de connaitre la météo de Paris à tout moment !</p>
       
        <div>
       
        <p> La météo à Paris est actuelement de  {data.main.temp.toFixed(0)} degrès. Passez une bonne journée ! </p>
        </div>
    </div>

 
    

        </div>
  )

 
  
  
      



}

export default Weather