import React from 'react';
import { UserPanel } from './Userpanel';

export const HomeContainer = () => {
  return (
    <div className="card">
      <h1 className="card-title">Dashboard</h1>
      <p className="card-subtitle">Welcome back</p>
      <UserPanel />
    </div>
  );
};