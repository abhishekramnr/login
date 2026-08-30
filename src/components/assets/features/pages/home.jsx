import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.jsx';
import { HomeContainer } from '../home/HomeContainer.jsx';

function Home() {
  const { user } = useContext(UserContext);

  // Guard: if user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main>
      <HomeContainer />
    </main>
  );
}

export default Home;