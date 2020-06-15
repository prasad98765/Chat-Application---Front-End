import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from '@material-ui/core/Chip';
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';
import TestField from '@material-ui/core/TextField'
import {CTX} from './Store'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    textAlign: "center",
    padding: theme.spacing(4, 2),
    backgroundColor:"lightgrey"
  },
  flex: {
    display: "flex",
    alignItems : "center"
  },
  topicwindow: {
    width: "30%",
    height: "300px",
    borderRight: "3px solid grey",    
  },
  chatwindow: {
    width: "70%",
    height: "300px",
    padding:'20px'
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

export default function Dashboard() {
  
  const classes = useStyles();

    //CTX Store
    const {allChats,sendChatAction,user} = React.useContext(CTX);
    console.log({allChats});
    const topics = Object.keys(allChats)


    // local State
    const [actionTopic, changeActionTopic] = React.useState(topics[0])
    const [testValue,changeTextValue] = React.useState('');


  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3">
          chat app
        </Typography>
        <Typography variant="h5" component="h5">
          {actionTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicwindow}>
            <List>
                {
                    topics.map(topic =>(
                        <ListItem onClick ={e => changeActionTopic(e.target.innerText) } key={topic} button>
                         <ListItemText primary={topic} />
                         </ListItem>
                    ))
                    
                }
             
            </List>
          </div>
          <div className={classes.chatwindow}>
          
                {
                    allChats[actionTopic].map((chat,i) =>(
                        // <ListItem key={topic} button>
                        //  <ListItemText primary={topic} />
                        //  </ListItem>
                        <div className = {classes.flex} key={i} >
                            <Chip label={chat.from} className={classes.chip}/>
                    <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                         </div>
                    ))
                    
                }
             
          </div>
        </div>
        <div className={classes.flex}>
        <TestField
          label="Send a chat"
          className = {classes.chatBox}
          value = {testValue}
          onChange={(e) => changeTextValue(e.target.value)}
        />

        <Button 
        variant="contained" 
        color="primary"
        className = {classes.button}
        onClick = {()=> {sendChatAction({from:user,msg : testValue,topic: actionTopic})
          changeTextValue('')
        
        }}
        >
        Send
      </Button>
        </div>
      </Paper>
    </div>
  );
}
