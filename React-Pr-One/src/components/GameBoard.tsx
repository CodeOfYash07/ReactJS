import { useState } from 'react';
import GiftBox from './GiftBox';
import ScoreBoard from './ScoreBoard';

const GameBoard = () => {
  const rewards = [100, 500, 1000, 10000, 100000, 1000000, 10000000000, -100, -200, -500, -1000, -5000];
  
  const getRandomReward = () => rewards[Math.floor(Math.random() * rewards.length)];
  
  const [balance, setBalance] = useState(1000);
  const [openedBoxes, setOpenedBoxes] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  const [boxes] = useState<Array<{ id: number; reward: number }>>(
    Array.from({ length: 6 }, (_, i) => ({ id: i, reward: getRandomReward() }))
  );

  const handleBoxOpen = (id: number, reward: number) => {
    setOpenedBoxes([...openedBoxes, id]);
    setBalance(balance + reward);
    
    if (reward > 0) {
      setMessage(`🎉 You won ${reward.toLocaleString()} CR!`);
    } else {
      setMessage(`😢 Oops! You lost ${Math.abs(reward).toLocaleString()} CR!`);
    }
    
    setTimeout(() => setMessage(''), 3000);
  };

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="game-container">
      <h1 className="game-title">🎁 Gift Box Game 🎁</h1>
      
      <ScoreBoard balance={balance} message={message} />
      
      <div className="gift-grid">
        {boxes.map((box) => (
          <GiftBox
            key={box.id}
            id={box.id}
            reward={box.reward}
            onOpen={handleBoxOpen}
            isOpened={openedBoxes.includes(box.id)}
          />
        ))}
      </div>
      
      {openedBoxes.length === 6 && (
        <button onClick={resetGame} className="play-again-btn">
          Play Again 🎮
        </button>
      )}
    </div>
  );
};

export default GameBoard;
