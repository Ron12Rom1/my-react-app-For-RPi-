import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <div id='counter'>
      <h1>Counter: {count}</h1>
      <div className='counter-btn'>
        <button class="btns" onClick={() => setCount(count + 1)}>Increment</button>
        <button class="btns" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <button class="btns" id="resetBTN" onClick={() => setCount(0)}>Reset</button>
    </div>
  );

}

export default App;
