import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
// import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    textField: {
        margin: theme.spacing(1),
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const EntryForm = (props) => {
    // console.log(props);
    const months = props.props.months;
    console.log(months);
    const classes = useStyles();

    return(
        <form className={classes.container} autoComplete="off">
            <TextField
                name="cardNumber"
                max="16"
                fullWidth
                // style={{ margin: 10}}
                margin="normal"
                required
                label="Card Number"
                className="textField"
                id="cardNumber"
                variant="outlined"
            />
            <TextField
                className="textField"
                fullWidth
                margin="normal"
                name="cardName"
                type="name"
                required
                label="Cardholder Name"
                id="cardName"
                variant="outlined"
            />
            <TextField
                className={classes.textField}
                name="expiryMonth"
                select
                required
                label="Expiry Month"
                id="expiryMonth"
                variant="outlined"
                SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
            >
                {months.map(month => (
                    <option key={month.value} value={month.value}>
                        {month.name}
                    </option>
                ))}
            </TextField>
            <TextField
                className={classes.textField}
                name="expiryYear"
                required
                label="Expiry Year"
                id="expiryYear"
                variant="outlined"

            />
            <TextField
                className={classes.textField}
                name="ccvCode"
                required
                label="CVV Code"
                id="ccvCode"
                variant="outlined"
                type="password"
                maxlength="4"
            />
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                fullWidth
            >
                Reset
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                fullWidth
            >
                Submit
            </Button>
        </form>
    );
};

export default EntryForm;