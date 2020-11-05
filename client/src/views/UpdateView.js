// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {Link} from '@reach/router'
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';



// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));


// const UpdateView = props => {
//     const [data, setData] = useState({})
//     const classes = useStyles();
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/product/'+props.id)
//             .then((response)=>{
//                 setData(response.data)
//             })
//             .catch(err=>{
//                 console.log(err);
//             })
//         }, [])

//     return(
//         <div className="container">
//             <Card className={classes.root} variant="outlined">
//                 <CardContent>
//                     <p>Details for {data.title}</p>
//                     <Typography className={classes.pos} color="textSecondary">
//                     Price: ${data.price}
//                     </Typography>
//                     <Typography variant="body2" component="p">
//                     Description: {data.description}
//                     </Typography>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }

// export default UpdateView;