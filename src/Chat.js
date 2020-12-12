import React from 'react';
import { useParams } from 'react-router-dom';
import "./Chat";

function Chat() {
    const {roomId}=useParams();
    return (
        <div  className="chat">
            {roomId}
        </div>
    )
}

export default Chat
