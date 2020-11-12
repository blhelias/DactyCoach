// ---------------
// Events Handlers
// ---------------


import resetWordsSample from "utils.js";


export function detectSpace(e, setInputWord, setInputVal){
    if (e.keyCode===32) {
        setInputWord(e.target.value);
        setInputVal('');
    }
}

export function handleChangeClassic(e, setInputVal, hasStarted, 
                      setHasStarted, index, words){
    if (!hasStarted) {
        setHasStarted(true);
        words[index].active = 1;
    }

    if (e.target.value !== " "){
         setInputVal(e.target.value);
    }
}

export function handleChangeGame(e, setInputVal, hasStarted, 
                      setHasStarted, index, words){
    if (!hasStarted) {
        setHasStarted(true);
        words[index].active = 1;
    }

    if (e.target.value !== " "){
         setInputVal(e.target.value);
    }
}

export function reset(setTimeLeft, setHasStarted, setInputVal, 
               setIndex, setWords, setInputWord,
               setSuccessAttempt, setFailedAttempt, setSpeed, setAccuracy,
               setInputDisabled, mode){
    setTimeLeft(60);
    setHasStarted(false);
    setInputVal("");
    setIndex(2);
    setSpeed(0);
    setAccuracy(0);
    setSuccessAttempt(0);
    setFailedAttempt(0);
    setInputWord("");
    setWords(JSON.parse(JSON.stringify(resetWordsSample(mode))));
    setInputDisabled(false);
}

export function updateWordsGame(inputWord, 
                     index, setIndex, 
                     words, setWords, 
                     setSuccessAttempt,
                     setFailedAttempt){
    for (let w in words){
        if (inputWord===words[w].word && words[w].active===1){
            setSuccessAttempt(s => s+1);
            words[w].checked = 1;
            words[w].active = 0;
            words[w].hasFailed = 0;
            if (index+1<words.length){
                words[index+1].active = 1;
                setIndex(i => i+1);
            }
            setWords(words);
        } else {
            setWords(words);
            setFailedAttempt(f => f+1);
        }
    }
 }

export function updateWordsClassic(inputWord, 
                     index, setIndex, 
                     words, setWords, 
                     setSuccessAttempt,
                     setFailedAttempt){
    if (inputWord===words[index].word){
        setSuccessAttempt(s => s+1);
        words[index].checked = 1;
        words[index].active = 0;
        words[index].hasFailed = 0;
        if (index+1<=words.length-1){
            words[index+1].active = 1;
        }
        setIndex(i => i+1);
        setWords(words);
    } else {
        words[index].hasFailed = 1;
        setWords(words);
        setFailedAttempt(f => f+1);
    }
}

// export = {
//   detectSpace,
//   handleChangeClassic,
//   handleChangeGame,
//   reset,
//   updateWordsGame,
//   updateWordsClassic
// };
