import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './PagesRouter/About';
import Home from './PagesRouter/Home';
import Login from './PagesRouter/Login';
import Registration from './PagesRouter/Registration';
import RequireAuth from './PagesRouter/RequiredAuth';


export default function MainRouting() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>Home:
          </NavLink>
        </li>

        <li>
          <NavLink to="/Registration" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>Registration:
          </NavLink>
        </li>

        <li>
          <NavLink to="/Login" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>Login:
          </NavLink>
        </li>

        <li>
          <NavLink to="/About" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>About:
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={ <Home />}></Route>
        {/* <Route path='/' element={<RequireAuth> <Home /> </RequireAuth> }></Route> */}
        <Route path='/Registration' element={<Registration />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </div>
  )
}