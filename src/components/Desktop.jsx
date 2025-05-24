import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Desktop.css';

const Desktop = () => {
  const navigate = useNavigate();

  return (
    <div className="desktop">
      <div className="desktop__icon" onClick={() => navigate('/terminal')}>
        <i className="fas fa-terminal fa-3x"></i>
        <p>Terminal</p>
      </div>
      <div className="desktop__icon" onClick={() => navigate('/logs')}>
        <i className="fas fa-folder-open fa-3x"></i>
        <p>Logs</p>
      </div>
      <div className="desktop__icon" onClick={() => navigate('/firewall')}>
        <i className="fas fa-shield-alt fa-3x"></i>
        <p>Firewall</p>
      </div>
      <div className="desktop__icon" onClick={() => navigate('/agent')}>
        <i className="fas fa-brain fa-3x"></i>
        <p>Agent</p>
      </div>
    </div>
  );
};

export default Desktop;
