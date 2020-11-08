import React, {useState, useEffect} from 'react';
import CreateForm from '../components/CreateForm'
import Catalogue from './BlogView'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import BlogCard from '../components/Card';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {navigate} from '@reach/router';
import TextField from '@material-ui/core/TextField';



const IndexView = props => {
    const {width, breakpoint}= props;
    const projects = [
        {
            imgUrl : '/images/art.jpg',
            title:'Art',
            id:'', 
            description:''
        },
        {
            imgUrl : '/images/littleworthasoul.png',
            title:'Little Worth a Soul',
            id:'', 
            description:''
        },
        {
            imgUrl : '/images/TEDx',
            title:'TEDx',
            id:'', 
            description:''
        }
    ]

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            minHeight:'86vh',
        },
        resumebtn:{
            marginTop:'10px',
            backgroundColor:'black',
            color:'white'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: 'black',
            backgroundColor:'#F3E5E5',
        },
        img:{
            backgroundColor: '#FAFAFA',
            color:'black',
            minHeight:'100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        littleworthasoul:{
            backgroundColor:'black',
            color:'white',
            position:'absolute',
            top:'100px',
            left:'330px'
        },
        art:{
            backgroundColor:'black',
            color:'white',
            position:'absolute',
            bottom:'190px',
            left:'220px'

        },
        tedx:{
            backgroundColor:'black',
            color:'white',
            position:'absolute',
            bottom:'320px',
            left:'450px'
        },
        img2:{
            background: 'url(/images/img2.png)',
            color:'black',
            minHeight:'100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        img3:{
            background: 'url(/images/phone.jpg)',
            color:'black',
            minHeight:'120vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        image: {
            backgroundColor: '#F3E5E5',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight:'60vh',
        },
        projectback1:{
            background: 'url(/images/projectback1.png)',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'630px',
            margin:'15px'
        },
        projectback2:{
            background: 'url(/images/projectback2.png)',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'630px',
            padding:'25px',
            marginLeft:'5px',
            position:'relative'
        },
        workback1:{
            background: 'url(/images/workback1.png)',
            backgroundSize: '100%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            height:'670px',
        },
        workback2:{
            background: 'url(/images/workback2.png)',
            backgroundSize: '100%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            height:'670px',
            position:'relative'
        },
        workexp:{
            position:'absolute',
            width:'520px',
            top:'-82px'

        },
        call2action:{
            backgroundColor:'black',
            color:'white',
            height:'315px',
            width:'100%',
            position: 'absolute',
            bottom:'0px',
            right:'0px',
            paddingLeft:'70px',
        },
        inputs:{
            backgroundColor:'white',
            width:'320.2px',
            marginBottom:'5px',
            padding:'30px',
            marginLeft:'30px',
            height:'315px'
        },
//                                                       Styles for mobile site
        projectback1mobile:{
            background: 'url(/images/projectback1.png)',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'730px',
            margin:'15px'
        },
        projectback2mobile:{
            background: 'url(/images/projectback2.png)',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'640px',
            padding:'25px',
            marginLeft:'5px',
            position:'relative'
        },
        littleworthasoulmobile:{
            backgroundColor:'black',
            color:'white',
            position:'absolute',
            top:'120px',
            left:'230px'
        },
        artmobile:{
            backgroundColor:'black',
            color:'white',
            position:'absolute',
            bottom:'90px',
            left:'190px'
        },
        tedxmobile:{
            backgroundColor:'black',
            color:'white',
            position:'absolute',
            top:'280px',
            left:'360px'
        },
        workback1mobile:{
            background: 'url(/images/workback1.png)',
            backgroundSize: '100%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            height:'530px',
        },
        workback2mobile:{
            background: 'url(/images/workback2.png)',
            backgroundSize: '100%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            height:'870px',
            position:'relative'
        },
        workexpmobile:{
            position:'absolute',
            width:'420px',
            top:'50px'
        },
        call2actionmobile:{
            backgroundColor:'black',
            color:'white',
            height:'200px',
            width:'670px',
            position: 'absolute',
            bottom:'20px',
            right:'60px'
        }
    }));
    const classes = useStyles();
    
    return(
        <div className={classes.root} id='index'>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                {/*--------------------------------------------- INTRO SECTION ------------------------------------------------ */}
                <Grid item xs={12} md={6}>
                    <img src="/images/portfolio.png" style={{width:'100%'}}/>
                </Grid>
                <Grid item container xs={12} md={6} direction="row" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={9}>
                        <Typography variant="h4" component="h5" >
                            Looking for a high performance business developer?
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography component="p">
                            I'm Mahin, a recent graduate from RIT with a major in Business Management and minors in Psychology and Marketting. I am passionate, driven and experienced in what I love doing. 
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography component="p">
                            I get work done.
                        </Typography>
                    </Grid>
                    {/* <img src="/images/mahintariq.png" style={{width:'100%'}} /> */}
                </Grid>
                {/*--------------------------------------------- PROJECTS SECTION ------------------------------------------------ */}
                {width < breakpoint ?
                    <Grid item container xs={12} direction="row" justify="center" alignItems="center" style={{marginBottom:'10px'}}>
                        <Grid item container direction="row" justify="center" alignItems="center" xs={12} md={5} className={classes.projectback1mobile}>
                            <Paper  elevation={6} className={classes.paper} >
                                <Typography variant="h6" component="h6">
                                    What makes me ME.
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    I began my career during my mid teens when I launched my first non-profit initiative, a charity organization called Little Worth a Soul. After recieving a very positive feedback from my community I realized my limitless potential. Since then I successfuly launched similar initiatives and have also organized events like TEDxRIT Dubai. Now after completing my bachelors I am starting my career as a Business Developer.  
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    I aspire to deliver meaning and add value wherever I go. My goal is to continue my career in Business Development while working on my passion projects on the side.   
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    Why do I work so hard ? I believe that in order to stand out in the market and be successful I have to diversify my skill set. Everyday I learn something new and this is what keeps me at my best. I know if I can benefit the world with posititve initiatives, I can bring similar energy to my workplace. 
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    Learn about my projects and how it has developed me.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item container xs={12} md={6} spacing={3} direction="row" justify="space-evenly" alignItems="center" className={classes.projectback2mobile}>
                            <Button variant="contained" className={classes.artmobile} onClick={()=>navigate('/art')}>
                                Art
                            </Button>
                            <Button variant="contained" className={classes.littleworthasoulmobile} onClick={()=>navigate('/littleworthasoul')}>
                                Little Worth a Soul
                            </Button>
                            <Button variant="contained" className={classes.tedxmobile} onClick={()=>navigate('/tedx')}>
                                TEDx
                            </Button>
                        </Grid>
                    </Grid>
                :
                    <Grid item container xs={12} direction="row" justify="center" alignItems="center" style={{marginBottom:'10px'}}>
                        <Grid item container direction="row" justify="center" alignItems="center" xs={12} md={5} className={classes.projectback1}>
                            <Paper  elevation={6} className={classes.paper} >
                                <Typography variant="h6" component="h6">
                                    What makes me ME.
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    I began my career during my mid teens when I launched my first non-profit initiative, a charity organization called Little Worth a Soul. After recieving a very positive feedback from my community I realized my limitless potential. Since then I successfuly launched similar initiatives and have also organized events like TEDxRIT Dubai. Now after completing my bachelors I am starting my career as a Business Developer.  
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    I aspire to deliver meaning and add value wherever I go. My goal is to continue my career in Business Development while working on my passion projects on the side.   
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    Why do I work so hard ? I believe that in order to stand out in the market and be successful I have to diversify my skill set. Everyday I learn something new and this is what keeps me at my best. I know if I can benefit the world with posititve initiatives, I can bring similar energy to my workplace. 
                                </Typography>
                                <Typography variant="p" component="p" style={{padding:'20px'}}>
                                    Learn about my projects and how it has developed me.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item container xs={12} md={6} spacing={3} direction="row" justify="space-evenly" alignItems="center" className={classes.projectback2}>
                            <Button variant="contained" className={classes.art} onClick={()=>navigate('/art')}>
                                Art
                            </Button>
                            <Button variant="contained" className={classes.littleworthasoul} onClick={()=>navigate('/littleworthasoul')}>
                                Little Worth a Soul
                            </Button>
                            <Button variant="contained" className={classes.tedx} onClick={()=>navigate('/tedx')}>
                                TEDx
                            </Button>
                        </Grid>
                    </Grid>
                }
                {/*--------------------------------------------- WORK EXPERIENCE SECTION ------------------------------------------------ */}
                
                {width < breakpoint ?
                    <Grid item container xs={12}  style={{padding:'0px', marginTop:'100px'}}>
                        <Grid item container sm={12} md={6} className={classes.workback1mobile} >
                        </Grid>
                        <Grid item container sm={12} md={6} className={classes.workback2mobile} direction="row" justify="center" alignItems="center">
                            <Grid item className={classes.workexpmobile} >
                                <Typography variant="h4" component="h3">
                                    Work Experience
                                </Typography>
                                <Typography component="p">
                                    I took my first corporate job which begun as an internship during my second year of college, at Pinnacle Middle East. I continued working part time as a full time student at RIT.
                                    At Pinnacle, I started as a Telesales Marketing intern and grew into a business development representative during my 1.5 years there. I highly enjoyed sales, and talking to people and the art of making conversation and selling. 
                                    I’ve worked on projects with organisations like Zendesk, IBM, SAP and Oracle, across Middle East and South Africa.
                                    Shortly after leaving Dubai, I joined another marketing company called Elev8 and quickly got promoted to an Account manager working with AT&T. 
                                    Throughout my sales career in the past 2-3 years, I have developed my personality, learnt what it means to be self driven, self motivated and highly passionate to deliver the best results.
                                    I know I can add value to your customers, current employees and the company culture.
                                </Typography>
                                <Button variant="contained" className={classes.resumebtn} onClick={()=>navigate('https://drive.google.com/file/d/1SJa0_C9CD9SKJHs_mmDesN62NfDEecCX/view?usp=sharing')}>
                                    Download Resume
                                </Button>
                            </Grid>
                            <Grid item container className={classes.call2actionmobile} >
                                <Grid item>
                                    
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    :
                    <Grid item container xs={12}  style={{padding:'0px', marginTop:'180px'}}>
                        <Grid item container sm={12} md={6} className={classes.workback1} >
                        </Grid>
                        <Grid item container sm={12} md={6} className={classes.workback2} direction="row" justify="center" alignItems="center">
                            <Grid item className={classes.workexp} >
                                <Typography variant="h4" component="h3">
                                    Work Experience
                                </Typography>
                                <Typography component="p">
                                    I took my first corporate job which begun as an internship during my second year of college, at Pinnacle Middle East. I continued working part time as a full time student at RIT.
                                    At Pinnacle, I started as a Telesales Marketing intern and grew into a business development representative during my 1.5 years there. I highly enjoyed sales, and talking to people and the art of making conversation and selling. 
                                    I’ve worked on projects with organisations like Zendesk, IBM, SAP and Oracle, across Middle East and South Africa.
                                    Shortly after leaving Dubai, I joined another marketing company called Elev8 and quickly got promoted to an Account manager working with AT&T. 
                                    Throughout my sales career in the past 2-3 years, I have developed my personality, learnt what it means to be self driven, self motivated and highly passionate to deliver the best results.
                                    I know I can add value to your customers, current employees and the company culture.
                                </Typography>
                                <Button variant="contained" className={classes.resumebtn} onClick={()=>navigate('https://drive.google.com/file/d/1SJa0_C9CD9SKJHs_mmDesN62NfDEecCX/view?usp=sharing')}>
                                    Download Resume
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default IndexView;