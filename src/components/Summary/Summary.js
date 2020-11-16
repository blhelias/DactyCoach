import React from 'react';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
// core components
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';
import MyLocation from '@material-ui/icons/MyLocation';

const useStyles = makeStyles(styles);

export default ({speed, accuracy, successAttempt, failedAttempt}) => {
    const classes = useStyles();
    return (
        <div> 
            <ul>
                <li> Résultat: {speed} </li>
                <li> Précision: {accuracy} </li>
                <li> Mots validés: {successAttempt} </li>
                <li> Mots non-validés: {failedAttempt} </li>
            </ul>
        </div>
    );
}
