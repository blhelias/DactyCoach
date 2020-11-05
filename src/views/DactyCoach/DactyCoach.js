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
// import Board from "components/Board/Board.js";
import Words from "components/Words/Words.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const wordsInit = [
    {"word": "Lorem", "id": 0, "active": 0, "checked": 0},
    {"word": "ipsum", "id": 1, "active": 0, "checked": 0},
    {"word": "dolor", "id": 2, "active": 0, "checked": 0},
    {"word": "sit",   "id": 3, "active": 0, "checked": 0},
    {"word": "amet",  "id": 4, "active": 0, "checked": 0}
]

function updateWords(inputWord, index, setIndex, words, setWords){
    if (inputWord===words[index].word){
        words[index].checked = 1;
        words[index].active = 0;
        if (index+1<=words.length-1){
            words[index+1].active = 1;
        }
        setIndex(index + 1);
        setWords(words);
    }
}

// Events Handlers
// ---------------
function detectSpace(e, setInputWord, setInputVal){
    if (e.keyCode===32) {
        setInputWord(e.target.value);
        setInputVal('');
    }
}

function handleChange(e, setInputVal, hasStarted, setHasStarted, index, words){
    if (!hasStarted) {
        setHasStarted(true);
        words[index].active = 1;
    }

    if (e.target.value !== " "){
         setInputVal(e.target.value);
    }
}

function reset(setTimeLeft, setHasStarted, setInputVal, setIndex, setWords){
    setTimeLeft(60);
    setHasStarted(false);
    setInputVal("");
    setIndex(0);
    setWords(JSON.parse(JSON.stringify(wordsInit)));
}


export default () => {

  const classes = useStyles();
  // Input Component 
  const [inputWord, setInputWord] = useState('');
  const [inputVal, setInputVal] = useState('');
  // Timer component
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  // Words component
  const [words, setWords] = useState(JSON.parse(JSON.stringify(wordsInit)));
  const [index, setIndex] = useState(0);

  // Manage Timer component 
  useEffect(() => {
      let interval = null;
      if (hasStarted && timeLeft > 0) {
          interval = setInterval(() => {
              setTimeLeft(timeLeft => timeLeft - 1);
          }, 1000);
      } else {
          reset(
            setTimeLeft,
            setHasStarted,
            setInputVal,
            setIndex,
            setWords
          )
	  }
	return () => clearInterval(interval);
  }, [hasStarted, timeLeft]);

  useEffect(() => {
      if (index <= words.length-1){
          updateWords(inputWord, index, setIndex, words, setWords);
      } else {
          reset(
            setTimeLeft,
            setHasStarted,
            setInputVal,
            setIndex,
            setWords
          )
      }
  }, [index, words, inputVal, timeLeft, hasStarted, inputWord]);

  return (
    <div>
        <GridContainer>

            {/* User Input */}
            <GridItem xs={12} sm={12} md={10}>
                <DCTextField
                  value={inputVal}
                  handleChange={(e) => handleChange(
                      e,
                      setInputVal,
                      hasStarted,
                      setHasStarted,
                      index,
                      words
                  )}
                  detectSpace={(e) => detectSpace(
                      e,
                      setInputWord,
                      setInputVal,
                  )}
                />
            </GridItem>

            {/* Timer */}
            <GridItem xs={12} sm={12} md={1}>
                <Timer value={timeLeft} />
            </GridItem>

            {/* Reset Button */}
            <GridItem xs={12} sm={12} md={1} >
                <div style={{
                    "height": "100%",
                      "display":"flex",
                      "justify-content": "center",
                      "align-items":"center"
                }}>
                <IconButton
                    variant="contained"
                    color="default"
                    className={classes.button}
                    children={<AutorenewIcon />}
                    style={{
                      "height": "100%",
                    }}
                    onClick={(e) => reset( 
                        setTimeLeft,
                        setHasStarted,
                        setInputVal,
                        setIndex,
                        setWords
                    )}
                ></IconButton></div>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <div style={{"padding-top":"20px"}}>
                <Words words={words} />
              </div>
            </GridItem>

        </GridContainer>
    </div>
  );
}
