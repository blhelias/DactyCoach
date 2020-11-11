import React, { useState, useEffect} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import DCTextField from "components/DCInputField/DCInputField.js";
import Timer from "components/Timer/Timer.js";
import Reset from "components/Reset/Reset.js";
import KPI from "components/KPI/KPI.js";
import Board from "components/Board/Board.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// Icons
import Speed from "@material-ui/icons/Speed";
import MyLocation from "@material-ui/icons/MyLocation";
// utils.js
// import resetWordsSample from "utils.js";
import {detectSpace, handleChange, reset, updateWords, wordsTest} from "handlers.js";

const useStyles = makeStyles(styles);


/* 
 * DactyCoachGame component 
 * ------------------------
 */
export default () => {
    const classes = useStyles();
    // Input Component 
    const [inputWord, setInputWord] = useState('');
    const [inputVal, setInputVal] = useState('');
    // Timer component
    const [hasStarted, setHasStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    // Words component
    const [words, setWords] = useState(
        JSON.parse(JSON.stringify(wordsTest))
    );
    const [index, setIndex] = useState(0);
    // KPI componens
    const [successAttempt, setSuccessAttempt] = useState(0);
    const [failedAttempt, setFailedAttempt] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    // Board component
    // TODO: rendre les dimensions responsives!
    const canvasWidth = 1275;
    const canvasHeight = 500;
    const xLimit = canvasWidth*0.8;

    // Manage Timer component 
    useEffect(() => {
        let interval = null;
        if (hasStarted && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000);
        } else {
            setHasStarted(false);
        }
        return () => clearInterval(interval);
    }, [timeLeft, hasStarted]); // only trigger when timer variable is updated
    
    // 
    useEffect(() => {
        if (index < words.length && hasStarted){
            if (words[index].x <= xLimit){
                words[index].x = words[index].x + 50;
                setWords(words);
            } else {
                words[index].hasFailed = 1
                setWords(words);
                setHasStarted(h => !h)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft, hasStarted]);

    useEffect(() => {
        if (index <= words.length-1 && hasStarted) {
            updateWords(
      		  inputWord, 
                index, setIndex, 
                words, setWords, 
                setSuccessAttempt, 
                setFailedAttempt
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputWord]);

    useEffect(() => {
        setAccuracy(
            (successAttempt <= 0) ? 0 : (
                successAttempt / (successAttempt + failedAttempt)
            )
        );
        setSpeed( 
            (successAttempt <= 0 || timeLeft===60) ? 0 : (
                (60 * successAttempt) / (60 - timeLeft) 
            )
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [successAttempt, failedAttempt]);

    return (
      <div>
          <GridContainer justify="center">

              {/* KPI | Speed */}
              <GridItem xs={12} sm={12} md={6}>
                  <KPI title={"Mots par Minute"} value={speed} icon={<Speed />} classes={classes} />
              </GridItem>
              {/* KPI | Accuracy */}
              <GridItem xs={12} sm={12} md={6}>
                  <KPI title={"Précision par Mots"} value={accuracy} icon={<MyLocation />} classes={classes} />
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
                <Reset 
                  onReset={(e) => reset(
                      setTimeLeft,
                      setHasStarted,
                      setInputVal,
                      setIndex,
                      setWords,
                      setInputWord,
                      setSuccessAttempt,
                      setFailedAttempt,
                      setSpeed,
                      setAccuracy
                  )}
                  classReset={classes.button} 
                />
              </GridItem>

              {/* Board */}
              <GridItem xs={12} sm={12} md={12}>
                  <Board 
      			  words={words} 
                    width={canvasWidth} 
                    height={canvasHeight} 
                    xLimit={xLimit} 
                  />
              </GridItem>

          </GridContainer>
      </div>
    );
}
