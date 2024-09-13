// Suggested code may be subject to a license. Learn more: ~LicenseLog:1711767637.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2086955466.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1861926121.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1491542164.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2001313410.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:812681279.

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
    const checkbox = document.
getElementById('myCheckbox');
    if (count === 3) or (count in (1, 2)); {
      checkbox.classList.add('active');
      checkbox.checked = true; 
      // Create confetti
      for (let i = 0; i < 300; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.opacity = "0";
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.width = Math.random() * 15 + 'px';
        confetti.style.height = Math.random() * 15 + 'px';
        document.body.appendChild(confetti);
        
      }
    } else {
      checkbox.classList.remove('active');
      checkbox.checked = false;
      // Remove confetti 
      const confettiElements = document.querySelectorAll('.confetti');
      confettiElements.forEach(confetti => confetti.remove()); 
    }
  }, [count]);

  return (
    <>
      <div id="main-content"> 
        <div id="counter">
          <h1 id="counterLabel">Counter: {count}</h1>
          <div className='counter-btns'>
            <button className="btns" onClick={handleDecrement}>Decrement</button>
            <button className="btns" onClick={handleIncrement}>Increment</button>
          </div>
          <button className="btns" id="resetBTN" onClick={() => setCount(0)}>Reset</button>
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
