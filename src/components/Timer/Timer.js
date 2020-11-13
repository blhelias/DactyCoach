import React from 'react';

function prettifyTime(time) {
  let min = Math.floor(time / 60);
  let minStr = min <= 10 ? '0' + min.toString() : min.toString();
  let sec = time - min * 60;
  let secStr = sec <= 10 ? '0' + sec.toString() : sec.toString();
  return minStr + ':' + secStr;
}

export default ({value}) => {
  return <div id="timer"> {prettifyTime(value)} </div>;
};
