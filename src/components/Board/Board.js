import backImagePath from 'assets/img/spacev3.png'
import React, {useEffect, useRef} from "react";

// draw a line
const drawLine = (ctx, info, style = {}) => {
  const { x, y, x1, y1 } = info;
  const { color = 'white', width = 2 } = style;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

const fillWord = (ctx, word) => {
    if (word.active===1){

        if (word.hasFailed===1){
            ctx.fillStyle = "red"
        }

        ctx.font = "bold 30px 'Roboto', 'Helvetica', 'Arial', sans-serif"
        // Shadow parameters
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = "black";
        ctx.shadowBlur=3;

        ctx.fillText(word.word, word.x, word.y);
    }
}

export default ({words, width, height, xLimit}) => {

    const canvas = useRef(null);
    const canvasContainer = useRef(null);

	useEffect(() => {
		const ctx = canvas.current.getContext("2d");
		// image de fond
        const backImage = new Image();
		// debug
        backImage.onload = () => {
            ctx.drawImage(backImage, 0, 0, width, height);
            ctx.fillStyle = "white";
		    drawLine(ctx, { x: width*0.8, y: 0, x1: width*0.8, y1: height });
            
            for (let w in words) {
		        let word = words[w];
                fillWord(ctx, word);
            }
        }
            backImage.src = backImagePath;
    })

    return(
        <div id="board" ref={canvasContainer}>
            <canvas 
				ref={canvas}
                height={height}
                width={width}
			/>
        </div>
    );
}
