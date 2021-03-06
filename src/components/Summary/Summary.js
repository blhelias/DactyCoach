import React from 'react';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';


export default ({speed, accuracy, successAttempt, failedAttempt}) => {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="info">
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h4>Score:</h4>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h4> {speed} </h4>
                                </GridItem>
                            </GridContainer>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>Mots / Minutes: </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>{speed}</div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>Précision: </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>{accuracy}</div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>Mots Validés: </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>{successAttempt}</div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>Mots Ratés: </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div>{failedAttempt}</div>
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
};
