import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/assets/features/pages/login.jsx';
import Home from './components/assets/features/pages/home.jsx';
import { UserContextProvider } from './components/assets/context/UserContext.jsx';
import './App.css';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
