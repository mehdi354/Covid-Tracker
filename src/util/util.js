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
      multiplier: 200,
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

        console.log(casesTypeColors[caseType].hex)
        return <Circle
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
                <h4>I am popup</h4>
            </Popup>
        </Circle>

    }
    )
);