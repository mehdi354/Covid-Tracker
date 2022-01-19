import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {prettyprint} from '../../util/util'
function SingleInfoBox({cases,total,today,setCaseType}){
    const setCaseTypeHandeller = ()=> {
        setCaseType(cases)
    }

    return( 
        <Card onClick={setCaseTypeHandeller}>
            <CardContent>
                <Typography>
                    {cases}
                </Typography>
                <h2>
                {prettyprint(today)} Cases
                </h2>
                <h4>
                    {prettyprint(total)} Total Cases
                </h4>
            </CardContent>
        </Card>
    )
}

export default SingleInfoBox;