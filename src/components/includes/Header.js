import { AppBar, Autocomplete, TextField, Toolbar, Typography, } from '@mui/material';
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Header({countryChange,allCountry,countriesData}){

    // const [countries,setCountries] = useState([]);
    // const [singleCountry,setSingleCountry] = useState('worldwide');
    // const [allCountryData,setAllCountryData] = useState([]);
    
    // useEffect(()=>{
    //    countryChange(singleCountry)
    //    allCountry(allCountryData)
    // },[countryChange,singleCountry,allCountry,allCountryData])
    
    

    const onCountryChange = (event, options) => {
        // setSingleCountry(options.value)
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
                     renderInput={(params ,index) => <TextField key={index} {...params} label="Country"/>}
                     onChange={onCountryChange}
                     />

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;