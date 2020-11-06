import React, { useState, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import DCTextField from "components/DCInputField/DCInputField.js";
import Timer from "components/Timer/Timer.js";
import Reset from "components/Reset/Reset.js";
import Score from "components/Score/Score.js";
import Words from "components/Words/Words.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// utils.js
import wordsInit from "utils.js";

const useStyles = makeStyles(styles);

function updateWords(inputWord, index, setIndex, words, 
    setWords, score, setScore){
    if (inputWord===words[index].word){
        words[index].checked = 1;
        words[index].active = 0;
        if (index+1<=words.length-1){
            words[index+1].active = 1;
        }
        setIndex(index + 1);
        setScore(score + 1);
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

function handleChange(e, setInputVal, hasStarted, 
                      setHasStarted, index, words){
    if (!hasStarted) {
        setHasStarted(true);
        words[index].active = 1;
    }

    if (e.target.value !== " "){
         setInputVal(e.target.value);
    }
}

function reset(setTimeLeft, setHasStarted, setInputVal, 
               setIndex, setWords, setInputWord, setScore){
    setTimeLeft(60);
    setHasStarted(false);
    setInputVal("");
    setIndex(0);
    setScore(0);
    setInputWord("");
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
  // Score component  
  const [score, setScore] = useState(0);

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
            setWords,
            setInputWord,
            setScore
          )
	  }
	return () => clearInterval(interval);
  }, [timeLeft, hasStarted]); // only trigger when timer variable is updated

  useEffect(() => {
      if (index <= words.length-1 && hasStarted) {
          updateWords(inputWord, index, setIndex, words, setWords, score, setScore);
      } else {
          reset(
            setTimeLeft,
            setHasStarted,
            setInputVal,
            setIndex,
            setWords,
            setInputWord,
            setScore
          )
      }
  }, [inputWord, index]);

  return (
    <div>
        <GridContainer justify="center">

            {/* Score */}
            <GridItem xs={12} sm={12} md={3} alignItems="center" >
                <Score value={score} classes={classes} />
            </GridItem>

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
              <Reset onReset={(e) => reset(
                     setTimeLeft,
                     setHasStarted,
                     setInputVal,
                     setIndex,
                     setWords,
                     setInputWord,
                     setScore
                )}
                classReset={classes.button} 
              />
            </GridItem>

            {/* Words component */}
            <GridItem xs={12} sm={12} md={12}>
              <div style={{"paddingTop":"20px"}}>
                <Words words={words} />
              </div>
            </GridItem>

        </GridContainer>
    </div>
  );
}
