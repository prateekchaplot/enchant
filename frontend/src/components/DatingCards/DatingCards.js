import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";

import "./DatingCards.css";
import axios from "axios";

const DatingCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/dating/cards");
      setPeople(res.data);
    }

    fetchData();
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              {person.name}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
