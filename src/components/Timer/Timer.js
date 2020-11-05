import React from "react";


export default ({value}) => {
	return (
	    <div 
          id="timer" 
          style={{"font-size": "x-large",
          "display":"flex",
          "justify-content": "center",
          "align-items":"center",
          "height":"100%"}}
        >
            {value}
        </div>
	);
}
