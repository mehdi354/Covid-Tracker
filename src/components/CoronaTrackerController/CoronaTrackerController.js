import React, { useEffect, useState } from 'react'
import Header from '../includes/Header';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';

function CoronaTrackerController(){
    const [country,setCountry] = useState('');
    const [countriesData,setCountriesData] = useState([]);
    const [mapzoom,setMapZoom] = useState(4);
    const [mapCenter,setMapCenter] = useState( { lat: 34.80746, lng: -40.4796 })

    const [statistics,setStatistics] = useState({})

    useEffect(()=>{
        console.log(country)
        const url = country === 'worldwide' ?  `https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/all`
        : `https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/countries/${country}`;

        fetch(url)
        .then((response)=> response.json())
        // .then((countryData)=>{
        //     setStatistics(countryData)
        // })
        .then((countryData)=>{
            setStatistics(countryData)
            setMapCenter([
                countryData.countryInfo.lat,
                countryData.countryInfo.long
            ]);
            setMapZoom(3)
            // console.log(countryData)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[country,setStatistics])
   
    const countryChangeHandeller = (data)=> {
        setCountry(data)
    }

    const allCountryHandeller = (data)=> {
        setCountriesData(data);
    }
    
    return(
        <div className="app">

            <Header 
            countryChange={countryChangeHandeller} 
            allCountry={allCountryHandeller}
            />
            
            <div className="app__container">
                <div className="app__Left">
                    <InfoBoxes countryName={country} statistics={statistics}/>
                    <Map center={mapCenter} zoom={mapzoom}/>
                </div>
                <div className="app__right">
                    <Sidebar countriesData={countriesData} caseType="cases"></Sidebar>
                </div>
            </div>
        </div>
        
        
        
    )
}

export default CoronaTrackerController;