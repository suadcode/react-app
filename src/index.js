import React from 'react';
import ReactDOM from 'react-dom/client'; // استيراد createRoot
import App from './App';

// إنشاء root جديد باستخدام createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
