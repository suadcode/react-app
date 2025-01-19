import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// تأكد أن العنصر التالي موجود في index.html: <div id="root"></div>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
