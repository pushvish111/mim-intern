
import './App.css';
import Popup from './components/Popup.js'
import React , { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
        <input
          type = "button"
          value = "click to verify"
          onClick={togglePopup}
        />
        {isOpen && <Popup 
        handleClose={togglePopup}
      />}
    </div>
  );
}

export default App;
