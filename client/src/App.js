import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import './App.css';
import NavBar1 from './components/NavBar'
import NavBar2 from './components/NavBar2'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BlogsView from './views/BlogView';
import DetailView from './views/DetailView';



function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 820;

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
    }
  }));
  const classes = useStyles();
  
  return (
    <div className="App">
      <CssBaseline />
      {width < breakpoint ? <NavBar2/>:<></>}
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={false} style={{width:"100%"}}>
            {width < breakpoint ? <></>:<NavBar1/>}
          </Grid>
          <Grid item spacing={3} xs={12} style={{width:"100%", padding:'10px'}}>
            <Router>
              <IndexView path="/" />
              <BlogsView path="/category/:id"/>
              <DetailView path="/blog/:id"/>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
// context api

export default App;
