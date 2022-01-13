import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import Linegraph from '../Linegraph/Linegraph';
import Table from '../Table/Table';

function Sidebar({countriesData,caseType}){
    return(
        <div className='Sidebar'>
            {/* <Card>
            <CardContent></CardContent> */}
            <Card>
                <CardContent>
                    <Typography>
                        Countrywise Data
                    </Typography>
                    <Table countriesData={countriesData} />
                    <Typography>
                        Live Graph
                        
                    </Typography>
                    <Linegraph caseType={caseType}></Linegraph>
                </CardContent>
            </Card>
        </div>
    )
}

export default Sidebar;