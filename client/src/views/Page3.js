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
        }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            minHeight:'86vh',
        },
        image: {
            backgroundImage: 'url(/images/tedstage.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'570px',
            width:'560px'
        },
        blog:{
            padding:'190px',
            height:'770px'
        },
        imagemobile: {
            backgroundImage: 'url(/images/tedstage.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'370px',
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
            {width<breakpoint? 
                <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{paddingTop:'60px'}}>
                    <Grid item xs={10} md={6} className={classes.imagemobile}>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding:'50px'}}>
                    <Typography variant="h3" component="h3" style={{marginBottom:'15px'}}>
                        TEDx 
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    When I joined college in 2017, I wanted to take initiatives that would build my character and help me grow my profile. I joined TEDx in my first semester of college and since them I made it to Head of Curation, to the President/Organiser in 2019. I worked on 3 projects, the last one being put on hold due to Covid-19.  
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    It has shaped my personality in a many ways. It was what gave me the confidence to take my first corporate job and excel in it. 
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    Team building, and team work is just one of the benefits of working with college students for a project that’s all voluntary work. It has helped me meet new professionals, build my network, build lasting relationships with my “colleagues” at TEDx RIT Dubai. It’s a major part of my life that has shaped me to be who I am today.  
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <GridList cellHeight={160} className={classes.gridList} cols={6}>
                        <GridListTile  cols={6} rows={2} >
                            <img src='/images/tedx1.jpeg' alt='' width='100%'/>
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted2.jpeg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted3.jpeg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted4.jpeg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted5.jpeg' alt='' width='100%' />
                        </GridListTile>
                    </GridList>
                </Grid>
            </Grid>
            :
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{paddingTop:'60px'}}>
                    <Grid item xs={10} md={6} className={classes.image}>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding:'50px'}}>
                    <Typography variant="h3" component="h3" style={{marginBottom:'15px'}}>
                        TEDx 
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    When I joined college in 2017, I wanted to take initiatives that would build my character and help me grow my profile. I joined TEDx in my first semester of college and since them I made it to Head of Curation, to the President/Organiser in 2019. I worked on 3 projects, the last one being put on hold due to Covid-19.  
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    It has shaped my personality in a many ways. It was what gave me the confidence to take my first corporate job and excel in it. 
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    Team building, and team work is just one of the benefits of working with college students for a project that’s all voluntary work. It has helped me meet new professionals, build my network, build lasting relationships with my “colleagues” at TEDx RIT Dubai. It’s a major part of my life that has shaped me to be who I am today.  
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <GridList cellHeight={160} className={classes.gridList} cols={12}>
                        <GridListTile  cols={6} rows={2} >
                            <img src='/images/tedx1.jpeg' alt='' width='100%'/>
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted2.jpeg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted3.jpeg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted4.jpeg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/ted5.jpeg' alt='' width='100%' />
                        </GridListTile>
                    </GridList>
                </Grid>
            </Grid>
            }
        </div>
    )
}

export default DetailView;