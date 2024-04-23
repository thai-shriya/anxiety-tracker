import { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='grid-container'>
      <div className={`flex-card ${isFlipped ? 'flipped':''}`} onClick={handleClick}>
        <div className='front'>
          <p>This is front face of the card</p>
        </div>
        <div className='back'>
          <p>This is back face of the card</p>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
