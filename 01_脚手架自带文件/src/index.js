import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//用于记录页面的性能
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //App外侧包裹React.StrictMode，可以帮忙检查代码里不合理的地方
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
