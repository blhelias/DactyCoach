import React from "react";


export default ({value}) => {
	return (
	    <div 
          id="timer" 
          style={{"fontSize": "x-large",
          "display":"flex",
          "justifyContent": "center",
          "alignItems":"center",
          "height":"100%"}}
        >
            {value}
        </div>
	);
}
