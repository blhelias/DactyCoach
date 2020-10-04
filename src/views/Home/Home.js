import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>

        <GridItem xs={12} sm={12} md={12} >
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{height: "100%"}}
                href="/training-session"
            >
                training
            </Button>
        </GridItem>

      </GridContainer>

    </div>
  );
}

