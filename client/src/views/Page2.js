import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const DetailView = props => {
    const {width, breakpoint} = props
    const [blog, setBlog]=useState([{id:'1', title:'Art'}, {id:'2', title:'TEDx'}, {id:'3', title:'Little Worth a Soul'}])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/blog'+props.id)
            .then((response)=>{
                setBlog(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            minHeight:'86vh',
        },
        image: {
            backgroundImage: 'url(/images/art.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'770px',
            width:'560px'
        },
        blog:{
            padding:'190px',
            height:'770px'
        },
        imagemobile: {
            backgroundImage: 'url(/images/art.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'670px',
            width:'560px'
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));
    const classes = useStyles();
    
    return(
        <div className={classes.root} id="detailView" >
            <div className={classes.root} id="detailView" >
            {width<breakpoint? 
                <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{paddingTop:'60px'}}>
                    <Grid item xs={10} md={6} className={classes.imagemobile}>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding:'50px'}}>
                        <Typography variant="h3" component="h3" style={{marginBottom:'15px'}}>
                            My Art
                        </Typography>
                        <Typography component="p" style={{marginBottom:'15px'}}>
                        I took art as an extra subject in As levels as a means to fill my course requirements. It unexpectedly revealed the skill I never knew I had. I overtime explored and stumbled upon my favourite kinds of art work. I begun with oil painting which I loved as it gave me the flexibility to work into the paint as I go, to create the perfect blend of colours. The perfectionist in me, however, could not settle down and accept the end product, which would lead me to spending weeks on a single project, only to abandon it in the end. 
                        </Typography>
                        <Typography component="p" style={{marginBottom:'15px'}}>
                        I then opened myself to Acrylic. I’ve tried acrylic paints for different types of projects and it had always given the perfect results without abandoning my pieces. From there I’ve explored Resin, Alcohol Ink and different forms of mixed media on canvas.
                        </Typography>
                        <Typography component="p" style={{marginBottom:'15px'}}>
                        Here are a couple pieces I worked on for my clients over the past few years. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <GridList cellHeight={160} className={classes.gridList} cols={12}>
                            <GridListTile  cols={12} rows={6} >
                                <img src='/images/art.jpg' alt='' width='100%'/>
                            </GridListTile>
                            <GridListTile  cols={12} rows={3}>
                                <img src='/images/art2.jpg' alt='' width='100%' />
                            </GridListTile>
                            <GridListTile  cols={12} rows={6}>
                                <img src='/images/art4.jpg' alt=''  width='100%'/>
                            </GridListTile>
                        </GridList>
                    </Grid>
                </Grid>
                :
                <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{paddingTop:'60px'}}>
                    <Grid item xs={10} md={6} className={classes.imagemobile}>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding:'50px'}}>
                        <Typography variant="h3" component="h3" style={{marginBottom:'15px'}}>
                            My Art
                        </Typography>
                        <Typography component="p" style={{marginBottom:'15px'}}>
                        I took art as an extra subject in As levels as a means to fill my course requirements. It unexpectedly revealed the skill I never knew I had. I overtime explored and stumbled upon my favourite kinds of art work. I begun with oil painting which I loved as it gave me the flexibility to work into the paint as I go, to create the perfect blend of colours. The perfectionist in me, however, could not settle down and accept the end product, which would lead me to spending weeks on a single project, only to abandon it in the end. 
                        </Typography>
                        <Typography component="p" style={{marginBottom:'15px'}}>
                        I then opened myself to Acrylic. I’ve tried acrylic paints for different types of projects and it had always given the perfect results without abandoning my pieces. From there I’ve explored Resin, Alcohol Ink and different forms of mixed media on canvas.
                        </Typography>
                        <Typography component="p" style={{marginBottom:'15px'}}>
                        Here are a couple pieces I worked on for my clients over the past few years. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <GridList cellHeight={160} className={classes.gridList} cols={6}>
                            <GridListTile  cols={2} rows={4} >
                                <img src='/images/art.jpg' alt='' width='100%'/>
                            </GridListTile>
                            <GridListTile  cols={2} rows={2.5}>
                                <img src='/images/art2.jpg' alt='' width='100%' />
                            </GridListTile>
                            <GridListTile  cols={2} rows={4}>
                                <img src='/images/art4.jpg' alt=''  width='100%'/>
                            </GridListTile>
                        </GridList>
                    </Grid>
                </Grid>
                }
            </div>
        </div>
    )
}

export default DetailView;