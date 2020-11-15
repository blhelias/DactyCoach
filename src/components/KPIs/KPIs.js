import React from 'react';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
// core components
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import KPI from 'components/KPI/KPI.js';
// Icons
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Speed from '@material-ui/icons/Speed';
import MyLocation from '@material-ui/icons/MyLocation';

const useStyles = makeStyles(styles);

export default ({speed, accuracy, successAttempt, failedAttempt}) => {
    const classes = useStyles();
    return (
        <GridContainer justify="center">
        {/* KPI | Speed */}
            <GridItem xs={12} sm={12} md={3}>
                <KPI
                    title={'Mots par Minute'}
                    value={speed}
                    icon={<Speed />}
                    colorClass={'info'}
                    classes={classes}
                />
            </GridItem>

            {/* KPI | Accuracy */}
            <GridItem xs={12} sm={12} md={3}>
                <KPI
                    title={'Précision par Mots'}
                    value={accuracy}
                    icon={<MyLocation />}
                    colorClass={'info'}
                    classes={classes}
                />
            </GridItem>

            {/* KPI | Mots Validés */}
            <GridItem xs={12} sm={12} md={3}>
                <KPI
                    title={'Mots validés'}
                    value={successAttempt}
                    icon={<CheckCircle />}
                    colorClass={'success'}
                    classes={classes}
                />
            </GridItem>

            {/* KPI | Mots Validés */}
            <GridItem xs={12} sm={12} md={3}>
                <KPI
                    title={'Mots échoués'}
                    value={failedAttempt}
                    icon={<Cancel />}
                    colorClass={'danger'}
                    classes={classes}
                />
            </GridItem>
        </GridContainer>
    );
}
