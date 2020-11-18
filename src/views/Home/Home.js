import React from 'react';
import {useHistory} from 'react-router-dom';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

export default function Home() {
    const classes = useStyles();
    let history = useHistory();
    function routeChange(e) {
        history.push('/classic-training');
    }
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        style={{height: '100%'}}
                        onClick={routeChange}>
                        Start Training
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}
