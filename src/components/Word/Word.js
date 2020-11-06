import React from "react";

const checkedMapper = {
    0: "notChecked",
    1: "checked",
}
const activeMapper = {
    0: "notActive",
    1: "active",
}


export default ({id, value, active, checked}) => {
	return (
        <span 
          id={id} 
          className={checkedMapper[checked] + " " + activeMapper[active] + " word"}
          style={{"fontSize": "xx-large"}}>
            {value}  </span>
	);
}
