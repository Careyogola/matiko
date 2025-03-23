import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import SignIn from './components/ui/sign_in_card.tsx';
import Homepage from './pages/Homepage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/dashboard' element={<Homepage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
