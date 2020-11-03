import React, { useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import DCTextField from "components/DCInputField/DCInputField.js";
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

function handleChange(e, inputVal, setInputVal){
    if (e.target.value !== " "){
         setInputVal(e.target.value);
    }
}

function clickHandler(e){
    // TODO: NotImplementedYet
    // reset timer
    // clean Board
    console.log(e);
}

export default () => {

  const classes = useStyles();
  // Init state
  const [userInput, setUserInput] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [remainingTime, setRemainingTime] = useState('1:00');

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
                      setInputVal
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
            <GridItem xs={12} sm={12} md={1} >
                <p>{remainingTime}</p>
            </GridItem>

            {/* Reset Button */}
            <GridItem xs={12} sm={12} md={1} >
                <IconButton
                    variant="contained"
                    color="default"
                    className={classes.button}
                    children={<AutorenewIcon />}
                    style={{height: "100%"}}
                    onClick={clickHandler}
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
