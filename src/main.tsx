import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import SignIn from './components/ui/sign_in_card.tsx';
import SignUp from './components/ui/sign_up_card.tsx';
import App from './App.tsx';

import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import EventsPage from './pages/events.tsx';


const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">   
      <AuthProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </div>
  </StrictMode>
);
