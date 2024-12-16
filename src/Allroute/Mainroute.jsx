import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Component/Home'
import Addabout from '../Component/Addabout'
import About from '../Component/About'
import Login from '../Component/Login'
import Description from '../Component/Description'
import { Privates } from '../Component/private'
import Update from '../Component/Update'

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={
         <Privates>
          <About />
          </Privates> }></Route>
        <Route path='/Addabout' element={<Addabout />}></Route>
        <Route path='/Description/:id' element={<Description />}></Route>
        <Route path='/Update' element={<Update />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='*' element={<h1>404: Page not found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default Mainroute
