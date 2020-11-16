import React from 'react';
// @material-ui/core
import {makeStyles} from '@material-ui/core/styles';
// core components
import MyLocation from '@material-ui/icons/MyLocation';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import avatar from 'assets/img/faces/marc.jpg';

const styles = {
    cardCategoryWhite: {
        color: 'rgba(255,255,255,.62)',
        margin: '0',
        fontSize: '14px',
        marginTop: '0',
        marginBottom: '0',
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: '3px',
        textDecoration: 'none',
    },
};

const useStyles = makeStyles(styles);

export default ({speed, accuracy, successAttempt, failedAttempt}) => {
    const classes = useStyles();
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
