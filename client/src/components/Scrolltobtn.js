import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, button, TextField, Button, Link} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const Scrollto = (props) => {
    const {itemName, active} = props;
    const [anchorTarget, setAnchorTarget]= useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(itemName));
    }, [itemName]);
    
    const handleClick = event => {
        event.preventDefault();
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        btn:{
            backgroundColor:'#F3C6CC',
            color:'black',
            marginTop:'50px'
        }
    }));
    
    const classes = useStyles();
    return(
        <>
            <Button variant="contained" className={classes.btn} onClick={handleClick}>
                Get in touch
            </Button>
        </>
    )


}

export default Scrollto;