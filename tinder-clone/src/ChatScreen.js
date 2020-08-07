import React, {useState} from "react"
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState([])
    const [messages, setMessages] = useState([
        {
            message: "Hey Tammy, I'm glad I matched with you"
        },
        {
            name: "Tammy",
            image: "https://i2-prod.mirror.co.uk/incoming/article20747994.ece/ALTERNATES/s1200d/3_tammyhembrow_65856041_1561336963991596_5927371909096531069_nAJPG.jpg",
            message: "Hey whats up!"

        }, 
        
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH TAMMY ON 07/08/20</p>
           {messages.map((message) => (
               message.name ? (
               <div className="chatScreen__message">
                   <Avatar 
                   className="chatScreen__image"
                   alt={message.name}
                   src={message.image}
                   />
                   <p className="chatScreen__text">{message.message}</p>
            </div>

               ) : (
                   
                   <div className="chatScreen__message">
                       <p className="chatScreen__textUser">{message.message}</p>
                     </div>
               ))
               
           )}

               
                    <form className="chatScreen__input">
                        <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type="text"
                        /> 
                        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                    </form>
            



        </div>
    );
}

export default ChatScreen