import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { navigate } from '@reach/router';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function DeleteBtn(props) {
    const classes = useStyles();
    const {updated, setUpdate} = props;

    const onClickHandler = e => {
        axios.delete("http://localhost:8000/api/product/"+props.id)
        .then(response => {
            console.log(response)
            navigate("/");
            setUpdate(!updated)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Button 
            onClick={onClickHandler}
            variant="contained"
            color="secondary"
            className={classes.button}
        >
            Delete
        </Button>
    )
}