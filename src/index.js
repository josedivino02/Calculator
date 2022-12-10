import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* inclosed tag */}
    <>
      <h1>Calculator</h1>
      {/* Instanciando o componente (instantiating the component) */}
      <Calculator />
    </>
  </React.StrictMode>
);

reportWebVitals();
