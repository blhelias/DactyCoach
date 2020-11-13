import backImagePath from 'assets/img/spacev3.png';
import React, {useState, useEffect, useRef} from 'react';

// draw a line
const drawLine = (ctx, info, style = {}) => {
    const {x, y, x1, y1} = info;
    const {color = 'white', width = 2} = style;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
};

const fillWord = (ctx, word) => {
    if (word.active === 1) {
        if (word.hasFailed === 1) {
            ctx.fillStyle = 'red';
        }
        ctx.font = "bold 30px 'Roboto', 'Helvetica', 'Arial', sans-serif";

        // Shadow parameters
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 3;

        ctx.fillText(word.word, word.x, word.y);
    }
};

export default ({words, width, height, xLimitn}) => {
    const canvas = useRef(null);
    const canvasContainer = useRef(null);
    const [h, setH] = useState(0)
    const [w, setW] = useState(0)

    useEffect(() => {
      setH(canvasContainer.current.clientHeight)
      setW(canvasContainer.current.clientWidth)
    }, [])


    useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        const backImage = new Image();

        backImage.onload = () => {
            ctx.drawImage(backImage, 0, 0, w, h);
            ctx.fillStyle = 'white';
            drawLine(ctx, {x: w * 0.8, y: 0, x1: w * 0.8, y1: h});

            for (let w in words) {
                fillWord(ctx, words[w]);
            }
        };
        backImage.src = backImagePath;
    });

    return (
        <div id="board" ref={canvasContainer}>
            <canvas ref={canvas} height={h} width={w} />
        </div>
    );
};
