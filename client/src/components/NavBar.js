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
        navi:{
            width:'590px'
        }
    }));
    const classes = useStyles();

    return (
        <div id='navbar' >
            <Grid container spacing={3} className={classes.root} direction="row" justify="space-between" alignItems="baseline">
                <Grid item container spacing={3} className={classes.navi}>
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
                    <Grid item>
                        <Link
                            component="button"
                            variant="body2"
                            style={{color:'white'}}
                            onClick={() => {
                                navigate("/littleworthasoul")
                            }}
                            >
                            Little Worth a Soul
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            component="button"
                            variant="body2"
                            style={{color:'white'}}
                            onClick={() => {
                                navigate("/tedx")
                            }}
                            >
                            TEDx
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            component="button"
                            variant="body2"
                            style={{color:'white'}}
                            onClick={() => {
                                navigate("/art")
                            }}
                            >
                            Art
                        </Link>
                    </Grid>
                </Grid>
                <Grid item >
                    <IconButton style={{color:'white'}} onClick={()=>navigate('https://www.facebook.com/mahin.sheikh3')}>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton  style={{color:'white'}} onClick={()=>navigate('https://instagram.com/maahin.sheikh?igshid=6pg66gah1zp9')}>
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton style={{color:'white'}} onClick={()=>navigate('http://linkedin.com/in/mahin-tariq-947760170')}>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton  style={{color:'white'}} onClick={()=>navigate('http://www.pinterest.com/Maahintariq')}>
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