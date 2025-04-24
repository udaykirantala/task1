import { useState } from 'react'
import Header from './assets/Componets/Header'
import Footers from './assets/Componets/Footer'
import Products from './assets/Componets/Products'
import Damcomponents from './assets/Componets/Damcomponent'
import MyAccount from './assets/Componets/MyAccount'
import Login from './assets/Componets/Login'
import { Route, Routes } from 'react-router'


function App() {
  return (
    <>
    
      <Header /><br/>
      <Routes>
      <Route path='/' element={<Damcomponents><Products /></Damcomponents>} />
      <Route path='/index' element={<Damcomponents><Products /></Damcomponents>} />
      <Route path='/Shope' element={<Damcomponents><Products /></Damcomponents>} />
        <Route path='/MyAccount' element={<MyAccount />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <br/><Footers />
    
      </>
  )
}

export default App
