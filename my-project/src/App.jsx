import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavbarComponents } from './components/NavbarComponents'
import { FooterComponents } from './components/FooterComponents'
import MainComponents from './components/MainComponents'

function App() {

  return (
    <>
    <NavbarComponents/>
    <MainComponents/>
    <FooterComponents/>
    </>
  )
}

export default App
