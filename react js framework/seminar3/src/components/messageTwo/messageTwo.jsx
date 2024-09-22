import { messages } from "../../data";
import { Message } from "../message/message";

function MessageTwo({message}) {
    console.log(message);
    return ( 
        <ul>
            {messages.map((messages) => <Message key={messages.id} message={messages.text}/>)}
        </ul>
     );
}

export default MessageTwo;