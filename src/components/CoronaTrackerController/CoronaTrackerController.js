import React, { useEffect, useState } from 'react'
import Header from '../includes/Header';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';

function CoronaTrackerController(){
    const [allcountryData,setAllcountryData] = useState([]);
    const [country,setCountry] = useState('worldwide');
    const [countriesForHeader,setCountriesForHeader] = useState([]);
    // const [singleCountry,setSingleCountry] = useState('worldwide');
    const [mapzoom,setMapZoom] = useState(3);
    const [mapCenter,setMapCenter] = useState( { lat: 34.80746, lng: -40.4796 })
    const [statistics,setStatistics] = useState({})
    const [casesType,setCasesType] = useState('cases')

    useEffect(()=>{
        const url = country === 'worldwide' ?  `https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/all`
        : `https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/countries/${country}`;

        fetch(url)
        .then((response)=> response.json())
        .then((countryData)=>{
            setStatistics(countryData)
            setMapCenter([
                countryData.countryInfo.lat,
                countryData.countryInfo.long
            ]);
            setMapZoom(5)
            console.log(countryData)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[country,setCountriesForHeader])

    // FETCH INITIALLY ALL COUNTRY DATA
    useEffect(()=>{
        fetch('https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/countries')
        .then((response)=> response.json())
        .then((data)=>{
            let allCountries = data.map( (country,index) => {
                const singleCountry = {
                    label: country.country,
                    value: country.countryInfo.iso2
                }
                return singleCountry
            } )

            const updatedData = [
                {label: "Worldwide",value: "worldwide"},
                ...allCountries
            ];

            setCountriesForHeader(updatedData) // FOR AUTOCOMPLETE 
            setAllcountryData(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);


   
    const countryChangeHandeller = (data)=> {
        setCountry(data)
    }

    const allCountryHandeller = (data)=> {
        setCountriesForHeader(data);
    }

    const setCaseTypeHandeller = data => {
        const types = data.toLowerCase();
        setCasesType(types)
    }



    
    return(
        <div className="app">

            <Header 
                countryChange={countryChangeHandeller} 
                // allCountry={allCountryHandeller}
                countriesData = {countriesForHeader}
            />
            
            <div className="app__container">
                <div className="app__Left">
                    <InfoBoxes countryName={country} statistics={statistics} setCaseType={setCaseTypeHandeller} casesType={casesType}/>
                    <Map 
                        center={mapCenter} 
                        zoom={mapzoom}
                        mapCountries={allcountryData}
                        casesType={casesType}
                    />
                </div>
                <div className="app__right">
                    <Sidebar countriesData={countriesForHeader} allcountryData={allcountryData} caseType={casesType} />
                </div>
            </div>
        </div>
        
        
        
    )
}

export default CoronaTrackerController;