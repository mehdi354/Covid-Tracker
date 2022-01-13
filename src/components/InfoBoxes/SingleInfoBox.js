import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Numeral from 'react-numeral';
import {prettyprint} from '../../util/util'
function SingleInfoBox({cases,total,today}){

    return( 
        <Card>
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