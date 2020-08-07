import React from "react"
import "./Chats.css"
import Chat from "./Chat"


function Chats() {
    return <div className="chats">

        <Chat
            name="Tammy"
            message="Hey what's up!"
            timestamp="40 seconds ago"
            profilePic="https://i2-prod.mirror.co.uk/incoming/article20747994.ece/ALTERNATES/s1200d/3_tammyhembrow_65856041_1561336963991596_5927371909096531069_nAJPG.jpg"
            />
     </div>;
    }


export default Chats 