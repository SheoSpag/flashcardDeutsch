import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
