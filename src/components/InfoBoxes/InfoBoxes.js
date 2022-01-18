import React, { useEffect, useState } from 'react'
import SingleInfoBox from './SingleInfoBox';
import './Infoboxes.css'
function InfoBoxes({countryName,statistics}){



    return( 
        <div className="app__infoboxes">
            <SingleInfoBox cases={"Total Cases"} total={statistics.cases} today={ statistics.todayCases} />
            <SingleInfoBox cases={"Total Deaths"} total={statistics.deaths} today={ statistics.todayDeaths} />
            <SingleInfoBox cases={"Total Recovered"} total={statistics.recovered} today={ statistics.todayRecovered}/>
        </div>
    )
}

export default InfoBoxes;