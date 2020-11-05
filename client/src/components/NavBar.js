import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import {navigate} from '@reach/router';



export default function ButtonAppBar(props) {
    const [categories, setCategories]=useState([{id:'1', title:'Art'}, {id:'2', title:'TEDx'}, {id:'3', title:'Little Worth a Soul'}])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/categories')
            .then((response)=>{
                setCategories(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
        }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            minHeight:'50px',
            borderTop:'1px solid',
            borderBottom:'1px solid',
            marginBottom:'1px',
            backgroundColor:'black',
            color:'white',
            paddingLeft:'20px'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();

    return (
        <div id='navbar' >
            <Grid container spacing={3} className={classes.root} direction="row" justify="space-between" alignItems="baseline">
                <Grid item spacing={3}>
                    <Grid container spacing={3}>
                        <Grid item>
                        <Link
                            component="button"
                            variant="body2"
                            style={{color:'white'}}
                            onClick={() => {
                                navigate('/')
                            }}
                            >
                            About
                        </Link>
                        </Grid>
                        {categories.map((category)=>{ 
                            return(
                            <Grid item>
                            <Link
                                component="button"
                                variant="body2"
                                style={{color:'white'}}
                                onClick={() => {
                                    navigate("/category/"+category.id)
                                }}
                                >
                                {category.title}
                            </Link>
                            </Grid>
                        )})}
                    </Grid>
                </Grid>
                <Grid item >
                    <IconButton style={{color:'white'}}>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton  style={{color:'white'}}>
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton style={{color:'white'}} >
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton  style={{color:'white'}}>
                        <PinterestIcon/>
                    </IconButton>
                    <IconButton style={{color:'white'}} >
                        <TwitterIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}