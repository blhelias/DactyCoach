import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>

        <GridItem xs={12} sm={12} md={10}>
            <TextField 
                id="outlined-basic" 
                label="" 
                variant="outlined" 
                fullWidth={true}
                autoComplete="off"
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={1} >
            <p>1:00</p>
        </GridItem>
      
        <GridItem xs={12} sm={12} md={1} >
            <IconButton
                variant="contained"
                color="default"
                className={classes.button}
                children={<AutorenewIcon />}
                style={{height: "100%"}}
            ></IconButton>
        </GridItem>

      </GridContainer>
      </div>
  );
}
