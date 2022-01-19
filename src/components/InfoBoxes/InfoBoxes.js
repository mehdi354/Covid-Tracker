import React from 'react'
import SingleInfoBox from './SingleInfoBox';
import './Infoboxes.css'
function InfoBoxes({countryName,statistics,setCaseType}){
    const setCaseTypeHandeller = (data) => setCaseType(data)

    return( 
        <div className="app__infoboxes">
            <SingleInfoBox cases={"Cases"} total={statistics.cases} today={ statistics.todayCases} setCaseType={setCaseTypeHandeller}/>
            <SingleInfoBox cases={"Deaths"} total={statistics.deaths} today={ statistics.todayDeaths} setCaseType={setCaseTypeHandeller}/>
            <SingleInfoBox cases={"Recovered"} total={statistics.recovered} today={ statistics.todayRecovered} setCaseType={setCaseTypeHandeller}/>
        </div>
    )
}

export default InfoBoxes;