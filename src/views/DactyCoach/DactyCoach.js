import React, { useState, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import DCTextField from "components/DCInputField/DCInputField.js";
import Timer from "components/Timer/Timer.js";
import Board from "components/Board/Board.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


// Events Handlers
// ---------------

function detectSpace(e, userInput, setUserInput, inputVal, setInputVal){
    if (e.keyCode===32) {
        setUserInput(e.target.value);
        setInputVal('');
    }
}


function handleChange(e, inputVal, setInputVal, hasStarted, setHasStarted){
    if (!hasStarted) {
        setHasStarted(true);
        // triggerCountdown();
    }

    if (e.target.value !== " "){
         setInputVal(e.target.value);
    }
}


function reset(e, setTimeLeft, setHasStarted, setInputVal){
    setTimeLeft(60);
    setHasStarted(false);
    setInputVal("");
}


export default () => {

  const classes = useStyles();
  // Init state
  // ----------

  // Input Component 
  const [userInput, setUserInput] = useState('');
  const [inputVal, setInputVal] = useState('');
  // Timer component
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // Manage Timer component 
  useEffect(() => {
      let interval = null;
      if (hasStarted && timeLeft > 0) {
          interval = setInterval(() => {
              setTimeLeft(timeLeft => timeLeft - 1);
          }, 1000);
      } else if (!hasStarted || timeLeft <= 0) {
	      setTimeLeft(60);
		  setHasStarted(false);	
          clearInterval(interval);
	  }
	return () => clearInterval(interval);
  }, [hasStarted, timeLeft]);

  return (
    <div>
        <GridContainer>

            {/* User Input */}
            <GridItem xs={12} sm={12} md={10}>
                <DCTextField
                  value={inputVal}
                  handleChange={(e) => handleChange(
                      e,
                      inputVal,
                      setInputVal,
                      hasStarted,
                      setHasStarted
                  )}
                  detectSpace={(e) => detectSpace(
                      e,
                      userInput,
                      setUserInput,
                      inputVal,
                      setInputVal
                  )}
                />
            </GridItem>

            {/* Timer */}
            <GridItem xs={12} sm={12} md={1}>
                <Timer value={timeLeft} />
            </GridItem>

            {/* Reset Button */}
            <GridItem xs={12} sm={12} md={1}>
                <IconButton
                    variant="contained"
                    color="default"
                    className={classes.button}
                    children={<AutorenewIcon />}
                    style={{height: "100%"}}
                    onClick={(e) => reset(
                        e, 
                        setTimeLeft,
                        setHasStarted,
                        setInputVal
                    )}
                ></IconButton>
            </GridItem>

            {/* Animation Board */}
            <GridItem xs={12} sm={12} md={12}>
                <Board inputVal={userInput}></Board>
            </GridItem>

        </GridContainer>
    </div>
  );
}
