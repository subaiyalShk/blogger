import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {navigate} from '@reach/router';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        background:'#F3C6CC',
        color:'black'
    },
    media: {
        height: 140,
    },
    });

const BlogCard = (props) => {
    const imgUrl = props.blog.imgUrl;
    const title = props.blog.title;
    const id = props.blog.id; 
    const description = props.blog.description;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={imgUrl}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="black" onClick={()=>navigate('/blog/'+ id)}>
                read more
            </Button>
        </CardActions>
        </Card>
    );
}

export default BlogCard