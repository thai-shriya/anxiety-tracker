import { useState } from 'react';
import './App.css';

function Card({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flex-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className='front'>
        <p>{frontContent}</p>
      </div>
      <div className='back'>
        <p>{backContent}</p>
      </div>
    </div>
  );
}

function App() {

  const cardData = [
    { frontContent: 'Front Content 1', backContent: 'Back Content 1' },
    { frontContent: 'Front Content 2', backContent: 'Back Content 2' }];
 
  return (
    <div className='grid-container'>
      {cardData.map((card, index) => (
        <Card key={index} frontContent={card.frontContent} backContent={card.backContent} />
      ))}
    </div>
    
  );
}

export default App;
