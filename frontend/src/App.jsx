import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login/Login'
import RouterConfig from './routes/RouterConfig';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppStore from './store/AppContext';

function App() {
  return (
    <AppStore>
      <Router>
        <RouterConfig />
      </Router>
    </AppStore>
  )
}

export default App
