import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'
import Nav from './components/Nav'
import { useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useStockContext } from './StockContext'
import MyStocks from './pages/Mystocks'

function App() {
  
  const { stocks, myStocks, getStocks } = useStockContext()
  

  useEffect(()=>{
  getStocks()
  },[])

  return (
      <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* we can create our own url parameter with /:symbol */}
        <Route path='/about' element={<About />}/>
        <Route path='/stocks/:symbol' element={<Stock />}/>
        <Route path='/stocks' element={<Dashboard />}/>
        <Route path='/mystocks' element={<MyStocks />}/>
      </Routes>
    </div>
  )
}

export default App
