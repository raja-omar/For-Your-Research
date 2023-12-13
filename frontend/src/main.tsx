import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreData from './StoreData'
import Home from './pages/Home'
ReactDOM.createRoot(document.getElementById("root")!!).render(
  <React.StrictMode>
    <StoreData />
  </React.StrictMode>
);
