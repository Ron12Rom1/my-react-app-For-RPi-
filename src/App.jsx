
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const checkbox = document.getElementById('myCheckbox');
    if (count === 3) {
      checkbox.classList.add('active');
      checkbox.checked = true; // Check the checkbox
    } else {
      checkbox.classList.remove('active');
      checkbox.checked = false; // Uncheck the checkbox
    }
  }, [count]);

  return (
    <>
      <div id="main-content"> {/* Add a container for the main content */}
        <div id="counter">
        <h1 id="counterLabel">Counter: {count}</h1>
        <div className='counter-btns'>
          <button class="btns" onClick={handleIncrement}>Increment</button>
          <button class="btns" onClick={handleDecrement}>Decrement</button>
        </div>
        <button class="btns" id="resetBTN" onClick={() => setCount(0)}>Reset</button>
      </div>
        <input type="checkbox" id="myCheckbox" style={{ display: 'none' }} />
        <div id="whenNum">
          <p>Nice😏</p>
        </div>
      </div>
      <div id="unsupported-message">
        <p>Sorry, this website cannot be displayed on small screens.</p>
      </div>
    </>
  );
}

export default App;
