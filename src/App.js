import React from 'react'
import './App.scss'
import './fonts/Marlboro.ttf';


import {
  Home,
  Breakfast,
  Lunch,
  Dinner,
  Reviews
} from './pages'

function App() {
  return (
    <div>
      <Home />
      <Breakfast />
      <Lunch />
      <Dinner />
      <Reviews />
    </div>
  )
}

export default App