import React from 'react'
import './Table.css'

function Table({countriesData}){

    return(
        <div className='Table'>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countriesData && (
                            countriesData.map((country,index) => {
                                return <tr key={index}>
                                <td>{country.country}</td>
                                <td> {country.cases} </td>
                            </tr>
                            })
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;