import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import store from './store/store'; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap App with Provider to connect to Redux */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
