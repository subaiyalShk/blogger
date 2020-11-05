import React, {useState, useEffect} from 'react';
import CreateForm from '../components/CreateForm'
import Catalogue from './BlogView'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const IndexView = props => {

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
    }));
    const classes = useStyles();
    
    return(
        <div className={classes.root} id='about'>
            <Grid container  direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src="/images/portfolio.jpg" style={{width:'100%'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="/images/mahintariq.png" style={{width:'100%'}} />
                </Grid>
                <Grid item xs={12}>
                    <Typography component="p">
                        Welcome to the club homies !
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="p">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default IndexView;