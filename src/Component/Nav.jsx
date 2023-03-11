import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='nav'>
        <ul>
            <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'>Home</NavLink></li></h2>
            <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/bollywood'>Bollywood</NavLink></li></h2>
            <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/technology'>Technology</NavLink></li></h2>
            <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/hollywood'>Hollywood</NavLink></li></h2>
            <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/fitness'>Fitness</NavLink></li></h2>
            <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/food'>Food</NavLink></li></h2>
        </ul>
      </div>
      <hr/>

    </>
  )
}

export default Nav