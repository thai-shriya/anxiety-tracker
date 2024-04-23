import { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='grid-container'>
      <div className='flex-card'><p>Item 1</p></div>
      <div className='flex-card'><p>Item 2</p></div>
      <div className='flex-card'><p>Item 3</p></div>
      <div className='flex-card'><p>Item 4</p></div>
      <div className='flex-card'><p>Item 5</p></div>
      <div className='flex-card'><p>Item 6</p></div>
      <div className='flex-card'><p>Item 7</p></div>
      <div className='flex-card'><p>Item 8</p></div>
      <div className='flex-card'><p>Item 9</p></div>
      <div className='flex-card'><p>Item 10</p></div>
    </div>
    
  );
}

export default App;
