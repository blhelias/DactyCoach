import React from 'react';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
// core components
import MyLocation from '@material-ui/icons/MyLocation';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default ({speed, accuracy, successAttempt, failedAttempt}) => {
    const classes = useStyles();
    return (
        <div> 
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardHeader>
                Resultat
            </CardHeader>
            <CardBody>
              <h1 className={classes.cardCategory}>{speed}</h1>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
            <ul>
                <li> Résultat: {speed} </li>
                <li> Précision: {accuracy} </li>
                <li> Mots validés: {successAttempt} </li>
                <li> Mots non-validés: {failedAttempt} </li>
            </ul>
        </div>
    );
}
