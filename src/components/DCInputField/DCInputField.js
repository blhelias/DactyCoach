import React from "react";

// material-ui components
import TextField from "@material-ui/core/TextField";


export default ({value, handleChange, detectSpace}) => {

	return (
	    <div>
		    <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                fullWidth={true}
                autoComplete="off"
		        value={value}
                onChange={handleChange}
                onKeyDown={detectSpace}
		    />
	    </div>
	);
}
