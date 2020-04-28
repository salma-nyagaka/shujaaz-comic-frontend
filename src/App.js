import React from 'react'
import './App.css'
import Routes from './routes/Routes'
import Navbar from '../src/components/NavbarComponent'

function App () {
  return (
    <div className='App'>
      <Navbar />

      <Routes />
    </div>
  )
}

export default App
