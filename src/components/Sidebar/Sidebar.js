import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import Linegraph from '../Linegraph/Linegraph';
import Table from '../Table/Table';

function Sidebar({countriesData,caseType,allcountryData}){
    console.log(caseType)
    return(
        <div className='Sidebar'>
            {/* <Card>
            <CardContent></CardContent> */}
            <Card className="Sidebar__card">
                <CardContent>
                    <Typography>
                        Countrywise Data
                    </Typography>
                    <Table countriesData={allcountryData} />
                    <div className="Linegraph__content">
                        <Typography>
                            Live Graph
                        </Typography>
                        <Linegraph caseType={caseType}></Linegraph>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Sidebar;