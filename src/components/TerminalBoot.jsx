// src/components/TerminalBoot.jsx
import { useEffect, useState } from 'react';
import './TerminalBoot.css';

const bootLines = [
  '[BOOT] Initializing core modules...',
  '[BOOT] Verifying identity layers...',
  '[BOOT] Injecting memory nodes...',
  '[BOOT] Establishing agent uplink...',
  '[SYSTEM] Red_Collar–OS ready.',
];

export default function TerminalBoot() {
  const [lines, setLines] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < bootLines.length) {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, bootLines[index]]);
        setIndex(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="terminal__bootBox">
      {lines.map((line, i) => (
        <p key={i} className="terminal__line">{line}</p>
      ))}
    </div>
  );
}
