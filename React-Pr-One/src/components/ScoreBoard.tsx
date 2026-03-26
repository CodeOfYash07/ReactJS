const ScoreBoard = ({ balance, message }: { balance: number; message: string }) => {
  return (
    <div className="scoreboard">
      <div className="balance-card">
        <div className="balance-label">Your Balance</div>
        <div className="balance-amount">{balance.toLocaleString()} CR</div>
      </div>
      
      {message && (
        <div className={`game-message ${message.includes('won') ? 'win' : 'lose'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
