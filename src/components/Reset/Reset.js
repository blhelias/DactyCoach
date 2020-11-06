import React from "react";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import IconButton from '@material-ui/core/IconButton';


export default ({resetClass, onReset}) => {
    const styles = {
        "height": "100%",
        "display":"flex",
        "justifyContent": "center",
        "alignItems":"center"
    }
	return (
      <div style={styles}>
        <IconButton
            variant="contained"
            color="default"
            className={resetClass}
            children={<AutorenewIcon />}
            style={{"height": "100%"}}
            onClick={onReset}
        />
      </div>
    );
}
