import './App.css';
import TerminalBoot from './components/TerminalBoot';


function App() {
  return (
    <div className="os__wrapper">
      <header className="os__header">
        <h1>Red__Collar--OS</h1>
        <p className="os__sub">Terminal UI Booting...</p>
      </header>

      <main className="os__main">
       <TerminalBoot />
      </main>
    </div>
  );
}

export default App;
