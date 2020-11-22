import backImagePath from 'assets/img/spacev5.png';
import React, {useEffect, useRef} from 'react';

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

const fillWord = (ctx, word, w, h) => {
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
        ctx.fillText(word.word, (word.x / 100) * w, (word.y / 100) * h);
    }
};

export default ({words, w, h}) => {
    const canvas = useRef(null);
    const canvasContainer = useRef(null);

    useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        const backImage = new Image();

        backImage.onload = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.save();
            ctx.drawImage(backImage, 0, 0, w, h);
            ctx.fillStyle = 'white';
            drawLine(ctx, {x: w * 0.8, y: 0, x1: w * 0.8, y1: h});

            for (let word in words) {
                fillWord(ctx, words[word], w, h);
            }

            ctx.restore();
        };
        backImage.src = backImagePath;
    });

    return (
        <div id="board" ref={canvasContainer}>
            <canvas ref={canvas} height={h} width={w} />
        </div>
    );
};
