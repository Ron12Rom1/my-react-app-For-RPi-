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
    const checkbox = document.getElementById('myCheckbox');
    const BGimg = document.getElementById("BG_img");
    const music = document.getElementById("music");

    if ([3, 21, -14, -2].includes(count)) {
      BGimg.style.animation = "BG_img_fadein 1s ease forwards";
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
        music.style.display = "block";
        
        
      }
    } else {
      BGimg.style.animation = "none";
      BGimg.style.opacity = "0";

      checkbox.classList.remove('active');
      checkbox.checked = false;
      // Remove confetti 
      const confettiElements = document.querySelectorAll('.confetti');
      confettiElements.forEach(confetti => confetti.remove()); 
    }
  }, [count]);

  return (
    <>

    <div id='BG_img' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU")`, backgroundSize: 'cover', height: '100vh', width: '100vw', position: 'fixed', top: '0', left: '0', zIndex: '-1', opacity: '0' }} />
      <div id="main-content"> 
        <div id="counter">
          <h1 id="counterLabel">Counter: {count}</h1>
          <div className='counter-btns'>
            <button className="btns" onClick={handleDecrement}>Decrement</button>
            <button className="btns" onClick={handleIncrement}>Increment</button>
          </div>
          <button className="btns" id="resetBTN" onClick={() => setCount(0)}>Reset</button>
        </div>
        <input type="checkbox" id="myCheckbox" style={{ display: '' }} />
        <div id="whenNum">
          <p>Nice😏</p>
        </div>
      </div>
      <div id="unsupported-message">
        <p>Sorry, this website cannot be displayed on small screens.</p>
      </div>

     <audio controls src="src/assets/y2mate.com - Caravan Palace  Lone Digger Official MV (1).mp3"></audio>

    </>
  );
}

export default App;
