import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import GridList from '../components/GridList'
import CommentBox from '../components/CommentBox'



const DetailView = props => {
    const [blog, setBlog]=useState([{id:'1', title:'Art'}, {id:'2', title:'TEDx'}, {id:'3', title:'Little Worth a Soul'}])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/blog'+props.id)
            .then((response)=>{
                setBlog(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
        }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            minHeight:'86vh',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        image: {
            backgroundImage: 'url(https://source.unsplash.com/Zsqbptb_j-Y)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
            minHeight:'60vh',
            
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }
    }));
    const classes = useStyles();
    
    return(
        <div className={classes.root} id="detailView" >
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12} md={3}>
                    <Typography component="h1" >
                        <h1>This is title</h1>
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.image}>
                    
                </Grid>
                <Grid item xs={12}>
                    <Typography component="p">
                    When your friends start to get married, every weekend in the Summer will play host to a happy couple, but what I’ve noticed recently is that the wedding invitations coming through my letterbox are for Autumn weddings. September and October are beautiful months to get married in- I may be a little biased given that my own wedding was an October celebration (you can watch the video here) but doing something a little different and having a Fall backdrop can look absolutely stunning. As a guest, all that leaves is the question: what to wear to an Autumn wedding?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="p">
                    When your friends start to get married, every weekend in the Summer will play host to a happy couple, but what I’ve noticed recently is that the wedding invitations coming through my letterbox are for Autumn weddings. September and October are beautiful months to get married in- I may be a little biased given that my own wedding was an October celebration (you can watch the video here) but doing something a little different and having a Fall backdrop can look absolutely stunning. As a guest, all that leaves is the question: what to wear to an Autumn wedding?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="p">
                    When your friends start to get married, every weekend in the Summer will play host to a happy couple, but what I’ve noticed recently is that the wedding invitations coming through my letterbox are for Autumn weddings. September and October are beautiful months to get married in- I may be a little biased given that my own wedding was an October celebration (you can watch the video here) but doing something a little different and having a Fall backdrop can look absolutely stunning. As a guest, all that leaves is the question: what to wear to an Autumn wedding?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <GridList list ={['https://source.unsplash.com/Zsqbptb_j-Y','https://source.unsplash.com/Zsqbptb_j-Y','https://source.unsplash.com/Zsqbptb_j-Y','https://source.unsplash.com/Zsqbptb_j-Y','https://source.unsplash.com/Zsqbptb_j-Y']}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="p">
                        When your friends start to get married, every weekend in the Summer will play host to a happy couple, but what I’ve noticed recently is that the wedding invitations coming through my letterbox are for Autumn weddings. September and October are beautiful months to get married in- I may be a little biased given that my own wedding was an October celebration (you can watch the video here) but doing something a little different and having a Fall backdrop can look absolutely stunning. As a guest, all that leaves is the question: what to wear to an Autumn wedding?
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8} component={Paper} elevation={6} square> 
                    <div className={classes.paper}>
                        <Typography component="h3">
                            Leave A Reply
                        </Typography>
                        <CommentBox/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default DetailView;