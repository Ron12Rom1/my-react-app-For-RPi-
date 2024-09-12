import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div id='counter'>
      <h1>Counter: {count}</h1>
      <div className='counter-btn'>
        <button class="btns" onClick={handleIncrement}>Increment</button>
        <button class="btns" onClick={handleDecrement}>Decrement</button>
      </div>
      <button class="btns" id="resetBTN" onClick={() => setCount(0)}>Reset</button>
      {count === 20 && (
        <div>
          <h2>You reached 20! 🎉</h2>
          {/* Add more elements or logic here for when count reaches 20 */}
        </div>
      )}
    </div>
  );
}

export default App;
