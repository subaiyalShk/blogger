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
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Typography} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



export default function ButtonAppBar(props) {
    const [state, setState] = React.useState(false)
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
        paper:{
            background:'#FCC977',
            color:'black',
            backgroundColor:'#F3C6CC'
        }
        
    }));
    const classes = useStyles();

    return (
        <div id='navbar' className={classes.root} >
            <AppBar
            position="fixed"
            style={{backgroundColor:'black'}}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={()=>setState(true)}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Mahin Tariq
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor={'left'} open={state} onClose={()=>setState(false)} PaperProps={{classes:{root:classes.paper}}} >
                <div
                    role="presentation"
                    onClick={()=>setState(false)}
                    onKeyDown={()=>setState(false)}
                    >
                    <List>
                        <ListItem button onClick={() => {navigate("/")}}>
                            <ListItemText primary={'About'} />
                        </ListItem>
                            <ListItem button onClick={() => {navigate('/littleworthasoul')}}>
                                <ListItemText primary={'Little Worth a Soul'} />
                            </ListItem>
                            <ListItem button onClick={() => {navigate('/tedx')}}>
                                <ListItemText primary={'TEDx'} />
                            </ListItem>
                            <ListItem button onClick={() => {navigate('/art')}}>
                                <ListItemText primary={'Art'} />
                            </ListItem>
                    </List>
                    <Divider/>
                    <List>
                    <ListItem button>
                        <IconButton style={{color:'black'}}  >
                            <FacebookIcon/>
                        </IconButton>
                        <IconButton  style={{color:'black'}}  >
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton style={{color:'black'}}  >
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton  style={{color:'black'}}  >
                            <PinterestIcon/>
                        </IconButton>
                        <IconButton style={{color:'black'}} onClick={() => {navigate("/category/")}} >
                            <TwitterIcon/>
                        </IconButton>            
                    </ListItem>  
                </List>
                </div>
            </Drawer>
        </div>
    );
}