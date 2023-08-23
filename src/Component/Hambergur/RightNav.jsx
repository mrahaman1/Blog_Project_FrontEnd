import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import './RightNav.css'


const Ul = styled.ul`
  @media (max-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <div className='nav'>
    <Ul open={open}>
        <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'>Home</NavLink></li></h2>
        <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/bollywood'>Bollywood</NavLink></li></h2>
        <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/technology'>Technology</NavLink></li></h2>
        <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/hollywood'>Hollywood</NavLink></li></h2>
        <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/fitness'>Fitness</NavLink></li></h2>
        <h2><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/food'>Food</NavLink></li></h2>       
    </Ul>
    </div>
  )
}

export default RightNav