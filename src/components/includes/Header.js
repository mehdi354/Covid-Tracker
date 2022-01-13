import { AppBar, Autocomplete, TextField, Toolbar, Typography,Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Header({countryChange,allCountry}){

    const [countries,setCountries] = useState([]);
    const [singleCountry,setSingleCountry] = useState('worldwide');
    const [allCountryData,setAllCountryData] = useState([]);
    
    useEffect(()=>{
       countryChange(singleCountry)
       allCountry(allCountryData)
    },[countryChange,singleCountry,allCountry,allCountryData])
    
    useEffect(()=>{
        fetch('https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/countries')
        .then((response)=> response.json())
        .then((c)=>{
            let allCountries = c.map( (country,index) => {
                const singleCountry = {
                    label: country.country,
                    value: country.countryInfo.iso2
                }
                return singleCountry
            } )

            const updatedData = [
                {label: "Worldwide",value: "worldwide"},
                ...allCountries
            ];
            setAllCountryData(c)
            setCountries(updatedData)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    const onCountryChange = (event, options) => {
        setSingleCountry(options.value)
        countryChange(options.value)
    }

    return(
        <div className='header'>
            <AppBar position="static" >
                <Toolbar>

                    <AcUnitIcon />
                    <Typography>
                        Corona Tracker
                    </Typography>
                    <Autocomplete 
                    disablePortal
                    options={countries}
                    sx={{ width: 300 }}
                    renderInput={(params ,index) => <TextField key={index} {...params} label="Country"/>}
                    onChange={onCountryChange}
                    />
                 

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;