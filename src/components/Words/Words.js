import React from "react";
import Word from "components/Word/Word.js";


export default ({words}) => {
	return (
        <div id="words-container">
            {words
              .filter(w => w.checked===0)
              .map(word => (
                  <Word 
                    key={word.id} 
                    active={word.active} 
                    hasFailed={word.hasFailed} 
                    value={word.word} 
                    id={word.id} 
                  /> 
              ))
            }
        </div>
	);
}
