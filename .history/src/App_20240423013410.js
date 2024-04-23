import { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='grid-container'>
      <div className='flex-card'>
        <p>Item 1</p>
      </div>
      
    </div>
    
  );
}

export default App;
