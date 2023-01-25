import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
