// ---------------
// Events Handlers
// ---------------

const wordsTest = [
    {"word": "Lorem", "id": 0, "active": 1, "checked": 0, "x": 250, "y": 250},
    {"word": "ipsum", "id": 1, "active": 0, "checked": 0, "x": 250, "y": 250},
    {"word": "dolor", "id": 2, "active": 0, "checked": 0, "x": 250, "y": 250},
    {"word": "sit",   "id": 3, "active": 0, "checked": 0, "x": 250, "y": 250},
    {"word": "amet",  "id": 4, "active": 0, "checked": 0, "x": 250, "y": 250}
]

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
               setIndex, setWords, setInputWord,
               setSuccessAttempt, setFailedAttempt, setSpeed, setAccuracy){
    setTimeLeft(60);
    setHasStarted(false);
    setInputVal("");
    setIndex(0);
    setSpeed(0);
    setAccuracy(0);
    setSuccessAttempt(0);
    setFailedAttempt(0);
    setInputWord("");
    // setWords(JSON.parse(JSON.stringify(resetWordsSample())));
    setWords(JSON.parse(JSON.stringify(wordsTest)));
}

 function updateWords(inputWord, 
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
        setWords(words);
        setFailedAttempt(f => f+1);
    }
}

module.exports = {
  detectSpace,
  handleChange,
  reset,
  updateWords,
  wordsTest
};
