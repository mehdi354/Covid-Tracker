import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {prettyprint} from '../../util/util'
function SingleInfoBox({cases,total,today,setCaseType,setActive}){
    const setCaseTypeHandeller = ()=> {
        setCaseType(cases)
    }

    let activeClass;

    if(setActive==='recovered') {
        activeClass= 'recovered__active'
    }
    else if(setActive==='cases') {
        activeClass= 'cases__active'
    }
    else if(setActive==='deaths') {
        activeClass= 'deaths__active'
    }
    else {
        activeClass=""
    }



    return( 
        <Card onClick={setCaseTypeHandeller} className={"Card " +activeClass}>
            <CardContent>
                <Typography component={'div'}>
                   <h4>{cases}</h4> 
                </Typography>
                <h2>
                + {prettyprint(today)}
                </h2>
                <h4>
                    {prettyprint(total)} Total
                </h4>
            </CardContent>
        </Card>
    )
}

export default SingleInfoBox;