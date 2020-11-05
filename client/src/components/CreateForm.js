import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
export default function CreateForm(props) {
    const {input, setInput, update, setUpdate}=props;
    const [errors, setErrors] = useState([]);

    const onChangeHandler = (e) =>{
        const inpuut= {
            ...input, 
            [e.target.id]:e.target.value 
        }
        setInput(inpuut);
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", input)
        .then(response=>{
            console.log(response.data)
            setUpdate(!update);
            // navigate('/');
        })
        .catch(err =>{
            console.log(err);
            const errorResponse= err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
        
        setInput({
            title:"",
            price:"",
            description:""
        })
    }

    return (
        <Paper elevation={3} style={styles.paper}>
            <h2>Create Product</h2>
            <form onSubmit={onSubmitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Title</InputLabel>
                    <OutlinedInput id="title" value={input.title} onChange={onChangeHandler} type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Price</InputLabel>
                    <OutlinedInput id="price" value={input.price} onChange={onChangeHandler} type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Description</InputLabel>
                    <OutlinedInput id="description"  onChange={onChangeHandler} type="text"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Create a product
                </Button>
            </form>
        </Paper>
    )
}