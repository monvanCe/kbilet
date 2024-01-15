import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'jotai';

import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Home from './screens/Home/Home';
import InQuery from './screens/InQuery/InQuery';
import Trip from './screens/Trip/Trip';
import Payment from './screens/Payment/Payment';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="inquery" element={<InQuery />} />
        <Route path="trip" element={<Trip />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
