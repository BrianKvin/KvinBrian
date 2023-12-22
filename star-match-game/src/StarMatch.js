import colors from './themes';
import utils from './Utils'
import { useState, useEffect } from 'react';

const StarMatch = ({ startNewGame }) => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  //setTimeout
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0){
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [secondsLeft, availableNums]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'

  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
    startNewGame();
  }

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }
    // candidateNums
    const newCandidateNums = 
      currentStatus === 'available' 
        ? candidateNums.concat(number) 
        : candidateNums.filter(cn => cn !== number);
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums)
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">  
          {gameStatus !== 'active' ? (
             <div className="game-done">
              <div className="message"
                style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}
              >
                {gameStatus === 'lost' ? 'Game Over' : 'NIce' }
              </div>
              <button onClick={resetGame}>Play Again</button>
             </div>
          ) : (
            utils.range(1, stars).map(starId =>
              <div 
                key={starId} 
                className="star" 
              /> 
            )
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <button 
              key={number} 
              className="number" 
              status={numberStatus(number)} 
              style={{ backgroundColor: colors[numberStatus(number)] }} 
              onClick={() => onNumClick(number, numberStatus(number))}
            >
              {number}
            </button>
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  )
}

export default StarMatch;