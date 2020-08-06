import React, { useState} from "react"
import TinderCard from "react-tinder-card"
import "./TinderCards.css"



function TinderCards() {

    const [people, setPeople] = useState([
    {
        name: "Demi Rose", 
        url: "https://i.redd.it/1fz1t7w3oz041.jpg"
    }, 
    {
        name: " Tammy Hembrow",
        url:"https://i2-prod.mirror.co.uk/incoming/article20747994.ece/ALTERNATES/s1200d/3_tammyhembrow_65856041_1561336963991596_5927371909096531069_nAJPG.jpg"
    }
]);

    return (
        <div>
            <h1>Tinder Cards</h1>

            <div className="tinderCards_cardContainer">

            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage:`url(${person.url})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards