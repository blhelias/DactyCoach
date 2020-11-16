import React, {useState, useEffect, useRef} from 'react';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import DCTextField from 'components/DCInputField/DCInputField.js';
import Timer from 'components/Timer/Timer.js';
import Reset from 'components/Reset/Reset.js';
import KPIs from 'components/KPIs/KPIs.js';
import Summary from 'components/Summary/Summary.js';
import Board from 'components/Board/Board.js';
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

import resetWordsSample from 'utils.js';

import {
    detectSpace,
    handleChangeGame,
    reset,
    updateWordsGame,
} from 'handlers.js';

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
    const [inputDisabled, setInputDisabled] = useState(false);
    // Timer component
    const [hasStarted, setHasStarted] = useState(false);
    const [time, setTime] = useState(0);
    const INTERVAL = 1000;
    // Words component
    const [words, setWords] = useState(
        JSON.parse(JSON.stringify(resetWordsSample('game'))),
    );
    const [index, setIndex] = useState(2);
    // KPI componens
    const [successAttempt, setSuccessAttempt] = useState(0);
    const [failedAttempt, setFailedAttempt] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [renderSummary, setRenderSummary] = useState(false);
    // Board component
    const [h, setH] = useState(0);
    const [w, setW] = useState(0);
    const parentBoardRef = useRef(null);
    const X_LIMIT = 80; // line will be drawn at 80% of the board's width
    const STEP = 10; // You have 9 seconds to write a word

    // Manage Timer component
    useEffect(() => {
        let interval = null;
        if (hasStarted) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, INTERVAL);
        } else {
            if (hasStarted) {
                setHasStarted(false);
            }
        }
        return () => clearInterval(interval);
    }, [time, hasStarted]); // only trigger when timer variable is updated

    useEffect(() => {
        // Pour tous les mots actifs, incrémenter X coor
        for (let w in words) {
            if (hasStarted && words[w].active === 1) {
                if (words[w].x + STEP <= X_LIMIT) {
                    words[w].x = words[w].x + STEP;
                    setWords(words);
                } else {
                    words[w].hasFailed = 1;
                    words[w].x = words[w].x + STEP;
                    setWords(words);
                    setHasStarted(false);
                    setInputDisabled(true);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time, hasStarted]);

    useEffect(() => {
        if (hasStarted) {
            updateWordsGame(
                inputWord,
                index,
                setIndex,
                words,
                setWords,
                setSuccessAttempt,
                setFailedAttempt,
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputWord]);

    useEffect(() => {
        if (!hasStarted && index > 2) {
            setInputDisabled(true);
            setRenderSummary(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasStarted]);

    useEffect(() => {
        setAccuracy(
            successAttempt <= 0
                ? 0
                : successAttempt / (successAttempt + failedAttempt),
        );
        setSpeed(
            successAttempt <= 0 || time === 0
                ? 0
                : (60 * successAttempt) / time,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [successAttempt, failedAttempt, hasStarted]);

    useEffect(() => {
        setH(parentBoardRef.current.clientHeight);
        setW(parentBoardRef.current.clientWidth);
    }, [time]);

    return (
        <div>
            <KPIs
                speed={speed.toFixed(0)}
                accuracy={(accuracy * 100).toFixed(0).toString() + '%'}
                successAttempt={successAttempt}
                failedAttempt={failedAttempt}
            />

            <GridContainer justify="center">
                {/* User Input */}
                <GridItem xs={12} sm={12} md={10}>
                    <DCTextField
                        value={inputVal}
                        inputDisabled={inputDisabled}
                        handleChange={e =>
                            handleChangeGame(
                                e,
                                setInputVal,
                                hasStarted,
                                setHasStarted,
                                index,
                                words,
                            )
                        }
                        detectSpace={e =>
                            detectSpace(e, setInputWord, setInputVal)
                        }
                    />
                </GridItem>

                {/* Timer */}
                <GridItem xs={12} sm={12} md={1}>
                    <Timer value={time} />
                </GridItem>

                {/* Reset Button */}
                <GridItem xs={12} sm={12} md={1}>
                    <Reset
                        onReset={e =>
                            reset(
                                setTime,
                                setHasStarted,
                                setInputVal,
                                setIndex,
                                setWords,
                                setInputWord,
                                setSuccessAttempt,
                                setFailedAttempt,
                                setSpeed,
                                setAccuracy,
                                setInputDisabled,
                                setRenderSummary,
                                'game',
                            )
                        }
                        classReset={classes.button}
                    />
                </GridItem>
            </GridContainer>

            <GridContainer>
                {/* Board */}
                    <GridItem xs={12} sm={12} md={12}>
                        <div ref={parentBoardRef}>
                            {(!renderSummary) ? (
                                <Board words={words} w={w} h={h} />
                            ) : (
                                <Summary 
                                    speed={speed.toFixed(0)}
                                    accuracy={(accuracy * 100).toFixed(0).toString() + '%'}
                                    successAttempt={successAttempt}
                                    failedAttempt={failedAttempt}
                                />
                            )}
                        </div>
                    </GridItem>
            </GridContainer>
        </div>
    );
};
