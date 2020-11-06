import wordsList from "variables/liste-mots-nature-frequence.js";

function getRandomSubarray(arr, size) {
    let shuffled = arr.slice()
    let i = arr.length
    let temp
    let index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function addMetaData(arr){
    let copy = []
    for (var i = 0; i < arr.length; i++) {
          copy.push({
            "word": arr[i],
            "id": i,
            "active": 0,
            "checked": 0
          });
    }
    return copy
}

const arrSample = getRandomSubarray(wordsList.wordsList, 200);
const wordsInit = addMetaData(arrSample);

export default wordsInit;
