import Numeral from "react-numeral"

export const prettyprint = (value ) => (
    
    <Numeral
        value={value !== 0 ? value : '0.0'}
        format={"0,0"}
    /> 
);