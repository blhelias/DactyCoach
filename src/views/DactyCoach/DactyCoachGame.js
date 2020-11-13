import React, {useState, useEffect} from 'react';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import DCTextField from 'components/DCInputField/DCInputField.js';
import Timer from 'components/Timer/Timer.js';
import Reset from 'components/Reset/Reset.js';
import KPI from 'components/KPI/KPI.js';
import Board from 'components/Board/Board.js';
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';
// Icons
import Speed from '@material-ui/icons/Speed';
import MyLocation from '@material-ui/icons/MyLocation';

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
    // Board component
    // TODO: rendre les dimensions responsives!
    // TODO: rendre la vitesse responsive aussi
    const canvasWidth = 1275;
    const canvasHeight = 500;
    const xLimit = canvasWidth * 0.8;
    const STEP =
        ((canvasWidth - 100 - (canvasWidth - xLimit)) * INTERVAL) / 10000;

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
            // TODO: disable input until reset button is pushed !
        }
        return () => clearInterval(interval);
    }, [time, hasStarted]); // only trigger when timer variable is updated

    useEffect(() => {
        // Pour tous les mots actifs, incrémenter X coor
        for (let w in words) {
            if (hasStarted && words[w].active === 1) {
                if (words[w].x + STEP <= xLimit) {
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
    }, [successAttempt, failedAttempt]);

    return (
        <div>
            <GridContainer justify="center">
                {/* KPI | Speed */}
                <GridItem xs={12} sm={12} md={3}>
                    <KPI
                        title={'Mots par Minute'}
                        value={speed}
                        icon={<Speed />}
                        classes={classes}
                    />
                </GridItem>
                {/* KPI | Accuracy */}
                <GridItem xs={12} sm={12} md={3}>
                    <KPI
                        title={'Précision par Mots'}
                        value={accuracy}
                        icon={<MyLocation />}
                        classes={classes}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <KPI
                        title={'Mots validés'}
                        value={successAttempt}
                        icon={<Speed />}
                        classes={classes}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <KPI
                        title={'Mots échoués'}
                        value={failedAttempt}
                        icon={<Speed />}
                        classes={classes}
                    />
                </GridItem>

                {/* User Input */}
                <GridItem xs={12} sm={12} md={10}>
                    <DCTextField
                        value={inputVal}
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
                        inputDisabled={inputDisabled}
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
                                'game',
                            )
                        }
                        classReset={classes.button}
                    />
                </GridItem>
            </GridContainer>

            <GridContainer>

                {/* Board */}
                <GridItem xs={12} sm={12} md={9} style={{"justifyContent": "left"}}>
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
};
