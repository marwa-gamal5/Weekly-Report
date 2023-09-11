import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route  , Routes } from 'react-router-dom';
import WeeklyReport from './pages/weeklyReport/weeklyReport';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path = {"/"} element = {<WeeklyReport/>} />
      
        </Routes>
      </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
