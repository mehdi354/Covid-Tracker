import numeral from 'numeral';
import React, { useEffect, useState } from 'react'
import { Line,  LineElement,
    Title,
    Tooltip,
    Legend, } from 'react-chartjs-2';


function Linegraph({caseType}){

    const [allDatas, setAllDatas] = useState({});

    const chartData = (data,cases) => {
      
        const chartdata = [];
        let lastDateData;
        let loop = 1;
        for(let date in data.cases) {
            let singleData;
            // console.log(`=================== Loop ${loop} ============================`)
            if(lastDateData) {
                singleData = {
                    x: date,
                    y: data.cases[date] - lastDateData
                }
                chartdata.push(singleData)
            }
            
            lastDateData = data.cases[date]
            // console.log(date)
            loop++;
          
        }

        return chartdata
        
    };

    useEffect(()=>{ 
        console.log(caseType)
        const casesData = async () => {
            await fetch('https://cors-anywhere.herokuapp.com/https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then((response)=> {
                return response.json()
            })
            .then((data)=> {
                console.log(data);
                const buildData = chartData(data,caseType);
                setAllDatas(buildData)

            })
            .catch((err)=> {
                console.log(err)
            })
        };
        casesData()
     },[caseType]);

 

    const options = {
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        maintainAspectRatio: false,
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              return numeral(tooltipItem.value).format("+0,0")
          
            },
          },
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                format: "MM/DD/YY",
                tooltipFormat: "ll",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return numeral(value).format("0.0a");
                     
                },
              },
            },
          ],
        },
      };

    return(
        <div className='Linegraph'>
            {allDatas?.length > 0 && (
            <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: allDatas,
              },
            ],
          }}
          options={options}
        />
            )
            }
        
        </div>
    )
}

export default Linegraph;