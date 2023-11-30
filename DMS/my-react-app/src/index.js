//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
