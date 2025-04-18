import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import SignIn from './components/ui/sign_in_card.tsx';
import  AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import SignUp from './components/ui/sign_up_card.tsx';
import App from './App.tsx';


const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

createRoot(document.getElementById('root')!).render(
  <AuthProvider store={store}>
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>} />
        
      </Routes>
    </StrictMode>
  </BrowserRouter>
  </AuthProvider>
);
