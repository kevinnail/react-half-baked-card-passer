import { useState } from 'react';
import { createContext } from 'react';
import initialCards from './cards-data.js';
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState('deck');
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [deck, setDeck] = useState(initialCards);

  return (
    <GameContext.Provider
      value={{
        selectedCard,
        setSelectedCard,
        to,
        setTo,
        from,
        setFrom,
        playerOneHand,
        setPlayerOneHand,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
        deck,
        setDeck,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
