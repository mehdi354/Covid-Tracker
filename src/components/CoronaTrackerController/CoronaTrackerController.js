import React, { useEffect, useState } from 'react'
import Header from '../includes/Header';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Sidebar from '../Sidebar/Sidebar';

function CoronaTrackerController(){
   const [country,setCountry] = useState('');
   const [countriesData,setCountriesData] = useState([]);
   
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
                    <InfoBoxes countryName={country} />
                </div>
                <div className="app__right">
                    <Sidebar countriesData={countriesData} caseType="cases"></Sidebar>
                </div>
            </div>
        </div>
        
        
        
    )
}

export default CoronaTrackerController;