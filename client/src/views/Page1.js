import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



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
            backgroundImage: 'url(/images/charity.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight:'60vh',
            width:'560px'
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
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{paddingTop:'60px'}}>
                <Grid item xs={12} md={6} className={classes.image}>
                    
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography variant="h3" component="h3" style={{marginBottom:'15px'}}>
                        Little Worth a Soul
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    Little worth a soul was founded in 2016, when I knew how much impacting lives meant to me. I realised that if I had to get where I want to be, I have to begin now. At age 19 I suggested the idea of running a charity initiative with my friends circle at the time, and almost everyone was in instantly. Ideas were bolting through my mind, but we started with a smaller project for a widely celebrated holy month in UAE. 
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    We begun with raising enough money to provide meals for over 500 people in a labour camp in Al Quoz, Dubai. The excitement in the body language of the receiving end was what made everyone feel rewarded. We raised charity from our fellow schoolmates with the use of word of mouth, and launching our Facebook and Instagram page. With the charity we collected we created a food box with biryani (traditional Indian/Pakistani meal), with fruit and Laban (milk) boxes. It was my first successful initiative, and I look forward to grow Little Worth a Soul on at a global scale.
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    Little Worth a Soul could not move forward with more projects due to the legal limitations in UAE, and the legal requirements that I was young to fulfil. Little Worth a Soul aims to partner with volunteers and charity initiatives to come up with innovative methods to help those in need. 
                    </Typography>
                    <Typography component="p" style={{marginBottom:'15px'}}>
                    Little Worth a Soul recognises that we can not end world poverty, but we strive to spread happiness by impacting one soul at a time. All it takes is a little.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
                <Grid item xs={12}>
                    <GridList cellHeight={160} className={classes.gridList} cols={6}>
                        <GridListTile  cols={3} rows={2}>
                            <img src='/images/charity1.jpg' alt='' width='100%'/>
                        </GridListTile>
                        <GridListTile  cols={2} rows={2}>
                            <img src='/images/littleworthasoul.png' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={2} rows={2}>
                            <img src='/images/charity2.jpg' alt='' width='100%' />
                        </GridListTile>
                        <GridListTile  cols={2} rows={2}>
                            <img src='/images/charity3.jpg' alt=''  width='100%'/>
                        </GridListTile>
                    </GridList>
                </Grid>
            </Grid>
        </div>
    )
}

export default DetailView;