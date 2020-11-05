import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';





const ProjectList = props => {
    const {setReset} = props;
    const[status, setStatus] = useState('loading');
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: '100%',
        },
        gridTile: {
            width: '100%',
            marginBottom:'30px', 
        },
        header: {
            backgroundColor: props.color,
            color:'white'
        },
    
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <GridList cellHeight={'auto'} spacing={4} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: '80px' }}>
                <ListSubheader className={classes.header} component="div">time</ListSubheader>
            </GridListTile>
            {props.list.map((imgUrl) => (
            <GridListTile key={imgUrl} cols={2} className={classes.gridTile} style={{height:'570px' }} >
                <img src={imgUrl} />
            </GridListTile>
            ))}
        </GridList>
        </div>
    );
    }

    export default ProjectList;