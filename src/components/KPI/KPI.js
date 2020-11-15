import React from 'react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardIcon from 'components/Card/CardIcon.js';
import CardFooter from 'components/Card/CardFooter.js';

export default ({title, value, icon, colorClass, classes}) => {
    // conditions here on KPIS
    return (
        <div
            id="score"
            style={{
                textAlign: 'center',
                fontSize: 'x-large',
                width: '100%',
            }}>
            <Card>
                <CardHeader color={colorClass} stats icon>
                    <CardIcon color={colorClass}>{icon}</CardIcon>
                    <p className={classes.cardCategory}> {title} </p>
                    <h3 className={classes.cardTitle}>{value}</h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={classes.stats}></div>
                </CardFooter>
            </Card>
        </div>
    );
};
