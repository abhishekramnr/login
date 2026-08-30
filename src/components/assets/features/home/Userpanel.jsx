import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.jsx';

export const UserPanel = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div>
      <div className="user-info">
        <p><strong>Name:</strong> {user?.name || 'AILDC User'}</p>
        <p style={{ marginTop: '6px' }}><strong>Username:</strong> @{user?.username || 'aildc'}</p>
      </div>
      <button onClick={handleLogout} className="btn-secondary">
        Sign Out
      </button>
    </div>
  );
};