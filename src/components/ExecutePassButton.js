import React, { useContext } from 'react';
import { GameContext } from '../GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard, setFrom, from, to }) {
  const { selectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setFrom={setFrom} /> from {from} to {to}
    </div>
  );
}
