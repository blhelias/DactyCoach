import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Speed from "@material-ui/icons/Speed";
import Update from "@material-ui/icons/Update";


export default ({value, classes}) => {
	return (
	    <div id="accuracy" 
             style={{
               "textAlign": "center", 
               "fontSize": "x-large", 
               "width":"100%"
             }}>
		  <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Speed />
              </CardIcon>
              <h3 className={classes.cardTitle}>Accuracy:  {value}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </div>
	);
}
