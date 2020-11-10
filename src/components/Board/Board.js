import React, {useState, useEffect, useRef} from "react";

export default ({words}) => {

    const canvas = useRef(null);
	const canvasContainer = useRef(null);

	useEffect(() => {
		const ctx = canvas.current.getContext("2d")
		const canvasHeight = canvasContainer.current.offsetHeight;
		const canvasWidth = canvasContainer.current.offsetWidth;
		console.log(canvasHeight);
		console.log(canvasWidth);
		ctx.fillStyle = "black"
		
		ctx.fillRect(0, 0, canvasWidth, canvasHeight)
		ctx.font = "10px Comic Sans MS"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
		ctx.fillText("hello", 20, 20)
      	ctx.fillText("world", 10, 10)
    }, [canvas, canvasContainer])

    return(
		<div ref={canvasContainer}>
            <canvas 
				ref={canvas}
			/>
		</div>
    );
}
