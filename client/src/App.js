import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import './App.css';
import NavBar1 from './components/NavBar'
import NavBar2 from './components/NavBar2';
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
import ScrollTobtn from './components/Scrolltobtn';
import FavoriteIcon from '@material-ui/icons/Favorite';



function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [email, setEmail]=useState('')
  const [message, setMessage]=useState('')
  const [err, setErr]=useState('')
  const [sent, setSent]=useState(false)

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
      position:'relative',
      paddingLeft:'30%'
    },
    call2action:{
      backgroundColor:'black',
      color:'white',
      height:'315px',
      width:'713px',
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
  footermobile:{
    backgroundColor:'black',
    height:'670px',
    color:'white',
    position:'relative',
    paddingTop:'40px',
    paddingBottom:'40px'
  },
  email:{
    position:'relative',
    left:'290px',
    top:'-120px',
    height:'10px',
  },
  inputsmobile:{
    backgroundColor:'white',
    width:'370px',
    padding:'50px',
    height:'375px'
  }
  }));
  const classes = useStyles();
  
  function handleSubmit(event){
    event.preventDefault();
    setErr('');
    axios.post('http://localhost:8000/api/email', {
        email,
        message
    }, { withCredentials:true })
    .then(()=>{ setSent(true);setEmail('');setMessage('')})
    .catch(()=>setErr('Please check your credentials !'));
  }
  
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
        <div id='footer' >
          <Grid container className={classes.footermobile}
            direction="column"
            justify="space-between"
            alignItems="center"
            >
              <Grid item >     
                <Typography variant="h5" component="h5">
                  Lets Chat! 
                </Typography>
                <Typography variant="p" component="p">
                    Mahin Tariq
                </Typography>       
                <Typography variant="p" component="p">
                    mahin.tariqs@gmail.com
                </Typography>
                <Typography variant="p" component="p">
                    1601 Elm St Floor 33, Dallas, TX 75201
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
                    <TextField value={email} fullWidth id="outlined-basic" label="Your email" variant="outlined" className={classes.inputs2} onChange={(e)=>{setEmail(e.target.value)}} />
                </Grid>
                <Grid item>
                    <TextField value={message} fullWidth id="outlined-basic" label="Message" multiline rows={4} variant="outlined" className={classes.inputs2} onChange={(e)=>{setMessage(e.target.value)}} />
                </Grid>
                <Grid item>
                {sent? 
                  <Button variant="contained" className={classes.resumebtn}>
                    thank you!
                  </Button>
                  :
                  <Button variant="contained" className={classes.resumebtn} onClick={handleSubmit}>
                      Say Hi!
                  </Button>
                  }
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="p" component="p">
                  <FavoriteIcon/> Made with Love by <a style ={{color:'white'}} href='https://www.subaiyal.sh'>www.subaiyal.sh</a>
                </Typography>
              </Grid>
          </Grid>
        </div>
      :
        <div id='footer'>
        <Grid container className={classes.footer} direction="row" justify="space-between"  alignItems="center">
          <Grid item>
            <Typography variant="p" component="p" style={{marginBottom:'15px'}} >
              <FavoriteIcon style={{marginRight:'10px'}}/> Made with Love by <a>www.subaiyal.sh</a>
            </Typography>
          </Grid>
          <Grid item container className={classes.call2action} direction="row" justify="flex-start" alignItems="flex-start"  >
              <Grid item style={{paddingRight:'40px', paddingTop:'90px'}}>
                  <Typography variant="h6" component="h6">
                      Lets Chat!
                  </Typography>
                  <Typography variant="p" component="p">
                      Mahin Tariq
                  </Typography>       
                  <Typography variant="p" component="p">
                      mahin.tariqs@gmail.com
                  </Typography>
                  <Typography variant="p" component="p">
                      1601 Elm St Floor 33, Dallas, TX 75201
                  </Typography>
              </Grid>
              <Grid item container className={classes.inputs}>
                <Grid item>
                    <TextField id="outlined-basic" label="Your email" variant="outlined" className={classes.inputs2} onChange={(e)=>{setEmail(e.target.value)}} />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Message" multiline rows={4} variant="outlined" className={classes.inputs2} onChange={(e)=>{setEmail(e.target.value)}} />
                </Grid>
                <Grid item>
                  {sent? 
                  <Button variant="contained" className={classes.resumebtn}>
                    thank you!
                  </Button>
                  :
                  <Button variant="contained" className={classes.resumebtn} onClick={handleSubmit}>
                      Say Hi!
                  </Button>
                  }
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        </div>
      }
    </div>
  );
}
// context api

export default App;
