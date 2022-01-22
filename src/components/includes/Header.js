import { AppBar, Autocomplete, TextField, Toolbar, Typography, } from '@mui/material';
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Header({countryChange,allCountry,countriesData}){

    const onCountryChange = (event, options) => {
        countryChange(options.value)
    }

    return(
        <div className='header'>
            <AppBar position="static" >
                <Toolbar>
                    <div className="title">
                        <AcUnitIcon />
                        <Typography>
                            Corona Tracker
                        </Typography>
                    </div>
                    <Autocomplete 
                    className="inputRoot"
                     align= 'right'
                     disablePortal
                     options={countriesData}
                     style={{ width: 300 }}
                     renderInput={(params ,index) => <TextField key={index} {...params} label="Country" variant="outlined"/>}
                     onChange={onCountryChange}
                     
                     />

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;