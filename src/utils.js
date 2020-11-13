import wordsList from 'variables/liste-mots-nature-frequence.js';

const SAMPLE_SIZE = 200;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSubarray(arr, sampleSize) {
  let shuffled = arr.slice();
  let i = arr.length;
  let temp;
  let index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, sampleSize);
}

function addMetaData(arr, mode) {
  let copy = [];
  for (var i = 0; i < arr.length; i++) {
    let active = 0;
    if (i < 3 && mode === 'game') {
      active = 1;
    }
    copy.push({
      word: arr[i],
      id: i, // identifiant
      active: active, // mot en cours ou pas
      checked: 0, // mot validé ou pas
      hasFailed: 0, // mot rouge ou vert
      x: getRandomIntInclusive(100, 150),
      y: getRandomIntInclusive(50, 450),
    });
  }
  return copy;
}

function resetWordsSample(mode) {
  const arrSample = getRandomSubarray(wordsList.wordsList, SAMPLE_SIZE);
  const words = addMetaData(arrSample, mode);
  return words;
}

export default resetWordsSample;
