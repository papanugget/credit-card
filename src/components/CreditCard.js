import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CreditCard = (props) => {
    const cardNumber = props.props.cardNumber;
    const cardName = props.props.cardName;
    const expYear = props.props.expYear;
    const months = props.props.months;
    const expMonth = props.props.expMonth;
    console.log(props);
    const classes = useStyles();
    return(
        <Card id="cardView">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Your Credit Card
                </Typography>
                <Typography color="textPrimary" variant="h5" component="h2" gutterBottom>
                    <span id="cardNumber" color="textSecondary">{!cardNumber ? '#### #### #### ####' : cardNumber }</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography className={classes.title} color="textSecondary" gutterBottom align="left">
                        Card Holder
                        </Typography>
                        <Typography color="textPrimary" variant="p" align="left">
                            <span id="cardHolder" color="textSecondary">{!cardName ? 'Your Name' : cardName}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs align="right">
                        <Typography className={classes.title} color="textSecondary" gutterBottom >
                        Expires
                        </Typography>
                        <Typography color="textPrimary" variant="p" >
                            <span id="cardHolder" color="textSecondary">{!expYear ? 'MM/YY' : expMonth + "/" + expYear}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CreditCard;