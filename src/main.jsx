// Suggested code may be subject to a license. Learn more: ~LicenseLog:3187763402.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3358136934.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './main.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={"Hello"} />
      <Route path="/counter" element={<App />} />
    </Routes>
    </BrowserRouter> 
);
