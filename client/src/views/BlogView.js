import React, { useState, useEffect } from  'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import BlogCard from '../components/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from '@reach/router'
import Grid from '@material-ui/core/Grid';



  
const Catalogue = (props) => {
    const [blogs, setBlogs]=useState([
      {id:'1', title:'Blog1 ', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, dolor quis pharetra dignissim, ipsum leo commodo metus, ac pharetra mi sem id ex. Donec semper dignissim tincidunt. Donec ultrices lorem eu ultricies feugiat. Pellentesque efficitur auctor risus in aliquam. Nullam et ante tellus. Ut posuere efficitur dapibus. Cras laoreet, ligula ac porttitor elementum, est ex aliquet dolor, sit amet varius quam mi eu leo.', imgUrl:'https://source.unsplash.com/Zsqbptb_j-Y'}, 
      {id:'2', title:'Blog2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, dolor quis pharetra dignissim, ipsum leo commodo metus, ac pharetra mi sem id ex. Donec semper dignissim tincidunt. Donec ultrices lorem eu ultricies feugiat. Pellentesque efficitur auctor risus in aliquam. Nullam et ante tellus. Ut posuere efficitur dapibus. Cras laoreet, ligula ac porttitor elementum, est ex aliquet dolor, sit amet varius quam mi eu leo.', imgUrl:'https://source.unsplash.com/Zsqbptb_j-Y'}, 
      {id:'3', title:'Blog3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, dolor quis pharetra dignissim, ipsum leo commodo metus, ac pharetra mi sem id ex. Donec semper dignissim tincidunt. Donec ultrices lorem eu ultricies feugiat. Pellentesque efficitur auctor risus in aliquam. Nullam et ante tellus. Ut posuere efficitur dapibus. Cras laoreet, ligula ac porttitor elementum, est ex aliquet dolor, sit amet varius quam mi eu leo.', imgUrl:'https://source.unsplash.com/Zsqbptb_j-Y'}
    ])
    useEffect(()=>{
      axios.get('http://localhost:8000/api/category'+props.id)
          .then((response)=>{
              setBlogs(response.data)
          })
          .catch(err=>{
              console.log(err);
          })
      }, [])
    const useStyles = makeStyles({
      root: {
        
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
    const classes = useStyles();

    return(
        <div id='blogs'>
          <Grid container style={{padding:'60px'}}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h4">
                h1. Heading
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} 
            container
            direction="row"
            justify="center"
            alignItems="center">
              {
                  blogs.map((blog, idx)=>{
                      
                      return(
                        <Grid item key={idx} xs={12} md={4}>
                          <BlogCard 
                            variant="outlined" 
                            blog={blog}
                            />
                        </Grid>
                      )
                  })
              }
          </Grid>
        </div>
    );
};

export default Catalogue;