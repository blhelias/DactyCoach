import React from "react";
import Word from "components/Word/Word.js";


export default ({words}) => {
	return (
        <div id="words-container">
            {words.map(word => {
                if (word.checked===0){     
                    return(
                    <Word 
                        key={word.id} 
                        active={word.active} 
                        checked={word.checked} 
                        value={word.word} 
                        id={word.id} 
                    /> )
                }
            })}
        </div>
	);
}
