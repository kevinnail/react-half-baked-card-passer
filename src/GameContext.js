import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState('deck');
  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard, to, setTo, from, setFrom }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
