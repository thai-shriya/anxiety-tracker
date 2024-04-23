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
    { frontContent: 'You Fail?', backContent: 'Get feedback and Learn from your failures' },
    { frontContent: 'You loose interest?', backContent: 'Remember why you started' },
    { frontContent: 'You feel you are worthless', backContent: 'Study until you feel you are worth for yourself' },
    { frontContent: 'No one is interested in you?', backContent: 'World has not seen what you can do yet. Prepare, gain skills and network with people.' },
    { frontContent: 'No one cares for you?', backContent: 'Why do you need someone when you are able to live by yourself. Be greatful for what you have in life' },
  { frontContent: 'You are not good looking?', backContent: 'Your body is not good yet. Go to gym, eat healthy. When your body is happy, you glow!' }];
 
  return (
    <div className='grid-container'>
      {cardData.map((card, index) => (
        <Card key={index} frontContent={card.frontContent} backContent={card.backContent} />
      ))}
    </div>
    
  );
}

export default App;
