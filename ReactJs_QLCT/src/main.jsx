import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import GlobalStyles from './components/GlobalStyles/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Router>
    </React.StrictMode>,
);
