import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import './App.css';
import NavBar1 from './components/NavBar'
import NavBar2 from './components/NavBar2'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, button, TextField, Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BlogsView from './views/BlogView';
import DetailView from './views/DetailView';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import {navigate} from '@reach/router';



function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 520;

  React.useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize", handleWindowResize);

  // Return a function from the effect that removes the event listener
  return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    h1:{
      height:'120px',
      size:'155px',
      paddingTop:'40px'
    },
    footer:{
      backgroundColor:'black',
      height:'130px',
      color:'white',
      position:'relative'
    },
    call2action:{
      backgroundColor:'black',
      color:'white',
      height:'315px',
      width:'618px',
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
  resumebtn:{
    backgroundColor:'#F3C6CC',
    color:'black'
  },
  email:{
    position:'relative',
    left:'280px',
    top:'-100px'
  },
  footermobile:{
    backgroundColor:'black',
    height:'230px',
    color:'white',
    position:'relative',
    marginTop:'40px'
  },
  inputsmobile:{
    backgroundColor:'white',
    width:'300px',
    marginBottom:'5px',
    padding:'30px',
    marginLeft:'250px',
    height:'315px'
  }
  }));
  const classes = useStyles();
  
  return (
    <div className="App">
      <CssBaseline />
      {width < breakpoint ? <NavBar2/>:<></>}
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
        {width < breakpoint ? <></>:
          <Grid item xs={5} style={{width:"100%"}}>
            <img src="/images/mahintariq.png" style={{width:'80%'}}/>
          </Grid>}
          <Grid item xs={false} style={{width:"100%"}}>
            {width < breakpoint ? <></>:<NavBar1/>}
          </Grid>
          <Grid item spacing={3} xs={12} style={{width:"100%", padding:'10px'}}>
            <Router>
              <IndexView path="/" width={width} breakpoint={breakpoint} />
              {/* <BlogsView path="/category/:id"/> */}
              <Page1 path="/littleworthasoul" width={width} breakpoint={breakpoint}/>
              <Page2 path="/art" width={width} breakpoint={breakpoint}/>
              <Page3 path="/tedx" width={width} breakpoint={breakpoint}/>
            </Router>
          </Grid>
        </Grid>
      </Container>
      {width < breakpoint ? 
        <Grid container className={classes.footermobile} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="p" component="p" style={{marginBottom:'15px'}} >
                Thank you !
            </Typography>
          </Grid>
          <Grid item container className={classes.call2action} direction="row" justify="flex-start" alignItems="flex-start"  >
            <Grid item style={{paddingRight:'40px', paddingTop:'0px'}} className={classes.email}>     
              <Typography variant="h5" component="h5">
                  Lets Chat! 
              </Typography>                     
            </Grid>
            <Grid item container className={classes.inputsmobile}>
              <Typography variant="p" component="p" style={{color:'black'}}>
                  To:
              </Typography>       
              <Typography variant="p" component="p" style={{color:'black'}}>
                  mahin.tariqs@gmail.com
              </Typography>   
              <Grid item>
                  <TextField id="outlined-basic" label="Your email" variant="outlined" className={classes.inputs2} />
              </Grid>
              <Grid item>
                  <TextField id="outlined-basic" label="Message" multiline rows={4} variant="outlined" className={classes.inputs2} />
              </Grid>
              <Grid item>
                  <Button variant="contained" className={classes.resumebtn} onClick={()=>navigate('https://drive.google.com/file/d/1SJa0_C9CD9SKJHs_mmDesN62NfDEecCX/view?usp=sharing')}>
                      Say Hi!
                  </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      :
        <Grid container className={classes.footer} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="p" component="p" style={{marginBottom:'15px'}} >
                Thank you !
            </Typography>
          </Grid>
          <Grid item container className={classes.call2action} direction="row" justify="flex-start" alignItems="flex-start"  >
              <Grid item style={{paddingRight:'40px', paddingTop:'90px'}}>
                  <Typography variant="p" component="p">
                      Mahin Tariq
                  </Typography>       
                  <Typography variant="p" component="p">
                      mahin.tariqs@gmail.com
                  </Typography>                     
              </Grid>
              <Grid item container className={classes.inputs}>
                
                <Grid item>
                    <TextField id="outlined-basic" label="Your email" variant="outlined" className={classes.inputs2} />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Message" multiline rows={4} variant="outlined" className={classes.inputs2} />
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.resumebtn} onClick={()=>navigate('https://drive.google.com/file/d/1SJa0_C9CD9SKJHs_mmDesN62NfDEecCX/view?usp=sharing')}>
                        Say Hi!
                    </Button>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      }
    </div>
  );
}
// context api

export default App;
