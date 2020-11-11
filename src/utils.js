import wordsList from "variables/liste-mots-nature-frequence.js";

const SAMPLE_SIZE = 200;

function getRandomSubarray(arr, sampleSize) {
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
    return shuffled.slice(0, sampleSize);
}

function addMetaData(arr){
    let copy = []
    for (var i = 0; i < arr.length; i++) {
          copy.push({
            "word": arr[i],
            "id": i, // identifiant
            "active": 0, // mot en cours ou pas
            "checked": 0, // mot validé ou pas
            "hasFailed": 0 // mot rouge ou vert
          });
    }
    return copy
}

function resetWordsSample(){
    const arrSample = getRandomSubarray(wordsList.wordsList, SAMPLE_SIZE);
    const words = addMetaData(arrSample);
    return words
}

export default resetWordsSample;
