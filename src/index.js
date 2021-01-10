import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

ReactDOM.render(
  <Suspense fallback={(<div>Loading...</div>)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();