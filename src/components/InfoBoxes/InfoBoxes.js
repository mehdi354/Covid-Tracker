import React from 'react'
import SingleInfoBox from './SingleInfoBox';
import './Infoboxes.css'
function InfoBoxes({countryName,statistics,setCaseType,casesType}){
    const setCaseTypeHandeller = (data) => setCaseType(data)

    return( 
        <div className="app__infoboxes">
            <SingleInfoBox cases={"Cases"} setActive={casesType==='cases'? casesType : '' } total={statistics.cases} today={ statistics.todayCases} setCaseType={setCaseTypeHandeller} />
            <SingleInfoBox cases={"Deaths"} setActive={casesType==='deaths'? casesType : '' } total={statistics.deaths} today={ statistics.todayDeaths} setCaseType={setCaseTypeHandeller} />
            <SingleInfoBox cases={"Recovered"} setActive={casesType==='recovered'? casesType : '' } total={statistics.recovered} today={ statistics.todayRecovered} setCaseType={setCaseTypeHandeller} />
        </div>
    )
}

export default InfoBoxes;