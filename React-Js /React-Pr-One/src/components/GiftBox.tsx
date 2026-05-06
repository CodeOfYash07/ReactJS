import { useState } from 'react';

const GiftBox = ({ id, reward, onOpen, isOpened }: { id: number; reward: number; onOpen: (id: number, reward: number) => void; isOpened: boolean }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpened) return;
    
    setIsOpening(true);
    
    // Play sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    audio.play().catch(() => {});
    
    setTimeout(() => {
      onOpen(id, reward);
      setIsOpening(false);
    }, 600);
  };

  return (
    <div
      className={`gift-box ${isOpened ? 'opened' : ''} ${isOpening ? 'opening' : ''}`}
      onClick={handleClick}
    >
      {!isOpened ? (
        <div className="gift-closed">
          <div className="gift-body"></div>
          <div className="ribbon-vertical"></div>
          <div className="ribbon-horizontal"></div>
          <div className="ribbon-bow"></div>
        </div>
      ) : (
        <div className="gift-opened">
          <div className="reward-content">
            <div className={`reward-amount ${reward > 0 ? 'positive' : 'negative'}`}>
              {reward > 0 ? '+' : ''}{reward.toLocaleString()}
            </div>
            <div className="reward-label">CR</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
