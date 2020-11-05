import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Box, Button, Paper, Grid, Link, Checkbox, FormControlLabel, CssBaseline, Avatar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },

    },
    }));

    export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                multiline
                style={{width:'98%'}}
                name="comment"  
                label="Comment" 
                variant="filled"
                rows={5}
            />
            <TextField 
                
                name="name"
                label="Name" 
                variant="filled"
            />
            <TextField 
                name="email"
                label="Email" 
                variant="filled" 
            />
            <Button
                type="submit"
                
                variant="contained"
                color="primary"
                className={classes.submit}
            >
            Send
            </Button>
        </form>
    );
}