import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login/Login'
import RouterConfig from './routes/RouterConfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <RouterConfig />
      </Router>
    </>
  )
}

export default App
