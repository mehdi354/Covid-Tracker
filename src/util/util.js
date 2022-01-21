import numeral from "numeral";
import { Marker, Popup, Circle } from "react-leaflet";


const casesTypeColors = {
    cases: {
      multiplier: 250,
      option: { color:"#cc1034", fillColor: "#cc1034" },
    },
    recovered: {
      multiplier: 300,
      option: { color:"#7dd71d", fillColor: "#7dd71d" },
    },
    deaths: {
      multiplier: 250,
      option: { color:"#ff6c47", fillColor: "#ff6c47" }
    },
  };


// const casesTypeColors = {
//   cases: {
//     hex: "#CC1034",
//     rgb: "rgb(204, 16, 52)",
//     half_op: "rgba(204, 16, 52, 0.5)",
//     multiplier: 200,
//   },
//   recovered: {
//     hex: "#7dd71d",
//     rgb: "rgb(125, 215, 29)",
//     half_op: "rgba(125, 215, 29, 0.5)",
//     multiplier: 200,
//   },
//   deaths: {
//     hex: "#fb4443",
//     rgb: "rgb(251, 68, 67)",
//     half_op: "rgba(251, 68, 67, 0.5)",
//     multiplier: 300,
//   },
// };

export const prettyprint = (value ) => (
    numeral(value !== 0 ? value : '0.0').format("0a")
);

export const showMapData = (data,caseType ) => (
    // console.log(data)
    // console.log(caseType)
    data.map( (country,index) => {

       
        return <Circle
            key={index}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            pathOptions={casesTypeColors[caseType].option}
            // fillColor={casesTypeColors[caseType].hex}
            // color={casesTypeColors[caseType].hex}
            fillOpacity={0.4}
            radius={
                Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier
            }
            >
            <Popup>
                <div className="countryInfo">
                  <div
                    style={{backgroundImage: `url(${country.countryInfo.flag})`}}
                    className="countryInfo__flag"
                  ></div>
                  <div  className="countryInfo__title">
                    <h5>{country.country}</h5>
                  </div>
                  <div className="countryInfo__total_cases">
                    Cases: {numeral(country.cases !== 0 ? country.cases : '0.0').format("0a")}
                  </div>
                  <div className="countryInfo__total_recovered">
                    Recovered: {numeral(country.recovered !== 0 ? country.recovered : '0.0').format("0a")}
                  </div>
                  <div className="countryInfo__total_deaths">
                    Deaths: {numeral(country.deaths !== 0 ? country.deaths : '0.0').format("0a")}
                  </div>
                </div>
            </Popup>
        </Circle>

    }
    )
);