import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AppContextProvider from './store/AppContext'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
);