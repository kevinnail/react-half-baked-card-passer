import React, { useContext } from 'react';
import { GameContext } from '../GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, to, from } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
