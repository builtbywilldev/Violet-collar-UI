import React, { useState, useEffect } from 'react';
import TerminalBoot from './components/TerminalBoot';
import Desktop from './components/Desktop';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootComplete(true);
    }, 3000); // 3 sec boot
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {bootComplete ? <Desktop /> : <TerminalBoot />}
    </div>
  );
}

export default App;
