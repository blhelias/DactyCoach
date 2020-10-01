import React from 'react';
import refresh from "../img/Refresh_icon.png"


const ButtonIcon = function(props){
    let style = {padding:5};
    return(
        <button style={style} >
            <img className="refresh" src={refresh} width="20" height="20" />
        </button>

        );
}

export {ButtonIcon};
