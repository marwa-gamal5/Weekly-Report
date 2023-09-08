import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeeklyReport from './pages/WeeklyReport/WeeklyReport';
import { BrowserRouter, Route , Link , Routes } from 'react-router-dom';
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
