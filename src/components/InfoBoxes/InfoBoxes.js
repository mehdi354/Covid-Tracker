import React, { useEffect, useState } from 'react'
import SingleInfoBox from './SingleInfoBox';
import './Infoboxes.css'
function InfoBoxes({countryName}){

    const [statistics,setStatistics] = useState({})

    useEffect(()=>{
        console.log(countryName)
        const url = countryName === 'worldwide' ?  `https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/all`
        : `https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/countries/${countryName}`;

        fetch(url)
        .then((response)=> response.json())
        .then((countryData)=>{
            setStatistics(countryData)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[countryName,setStatistics])

    return( 
        <div className="app__infoboxes">
            <SingleInfoBox cases={"Total Cases"} total={statistics.cases} today={ statistics.todayCases} />
            <SingleInfoBox cases={"Total Deaths"} total={statistics.deaths} today={ statistics.todayDeaths} />
            <SingleInfoBox cases={"Total Recovered"} total={statistics.recovered} today={ statistics.todayRecovered}/>
        </div>
    )
}

export default InfoBoxes;