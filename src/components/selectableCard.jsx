import React from 'react';
import './selectableCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: '10px'

    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '4px !important',
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

export default function SelectableCard(props) {

    const classes = useStyles();
    
    let cardUIElement = 
        <Card   className={classes.root}>
            <CardContent className={classes.content}>
                <Radio
                    checked={props.checked}
                    color="default"
                />
                <p>{props.title}</p>
                <img src={props.icon} alt={props.titleIcon} />
            </CardContent>
    
        </Card>;
    return cardUIElement;
}

