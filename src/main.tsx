import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { NavigationProvider } from '@contexts/NavigationContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <NavigationProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NavigationProvider>
  </Router>,
)
