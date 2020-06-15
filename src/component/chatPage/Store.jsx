import React from "react";
import Io from 'socket.io-client'
export const CTX = React.createContext();
const initState ={
    Friends1 :[
        {from:'',msg:'hello'},
    ],
    Friends2 :[
        {from:'',msg:'Hiii'},
    ],
    Friends3 :[
        {from:'',msg:''},
    ]

}
function reducer(state, action){
    const {from,msg} = action.payload;
    switch(action.type){
       case "RECEIVE_MESSAGE":
           return{
            ...state,
            [action.payload.topic]:[
                ...state[action.payload.topic],
                {
                    from,
                    msg 
                }
            ]
           }
        default:
            return state
    }
}



let socket;
function sendChatAction(value){
    socket.emit('chat message',value);  
}


export default function Store(props){    
    const [allChats, dispatch] = React.useReducer(reducer, initState)
    if(!socket){
        socket = Io(':4000');
        socket.on('chat message',function(msg){
            dispatch({type :'RECEIVE_MESSAGE',payload: msg});
            
        })
    }
    const user = ""
    return(
        <CTX.Provider value= {{allChats,sendChatAction,user}}>
            {props.children}
        </CTX.Provider >
    )
}