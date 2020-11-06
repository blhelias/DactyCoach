import wordsList from "variables/liste-mots-nature-frequence.js";

function getRandomSubarray(arr, size) {
    let shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function addMetaData(arr){
	// TODO
}

let arrSample = getRandomSubarray(xwordsList, 200);
let wordsSample = addMetaData(arrSample);
