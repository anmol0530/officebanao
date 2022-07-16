import { decrement, increment, thumbnail } from "../images";
import '../styles/Cards.scss';

const Cards = ({ cards, setCards }) => {

  const handleClick = (boo, id) => {
    const newData = cards.map(card => {
      if (card.id === id) {
        return boo ? { ...card, count: card.count + 1 } : card.count > 0 ? { ...card, count: card.count - 1 } : card;
      }
      return card;
    });
    setCards(newData);
  };

  return (
    <div className="cards">
      {cards.map(card => {
        return (
          <div key={card.id} className="card">
            <div className="top">
              <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className="middle">
              {card.heading}
              <div className="counter">
                <img src={decrement} alt="decrement" onClick={() => handleClick(false, card.id)} />
                <span>{card.count > 9 ? card.count : "0" + card.count}</span>
                <img src={increment} alt="increment" onClick={() => handleClick(true, card.id)} />
              </div>
            </div>
            <div className="bottom">
              {card.description}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards;