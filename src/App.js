import React from 'react'
import Header from './Component/Header'
import Nav from './Component/Nav'
import './App.css'
import BlogRoutes from './Component/BlogRoutes'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <div className='App'>
        <Header/>
        <Nav/>
        <BlogRoutes/>
        <Footer/>
      </div>
    </>
  )
}

export default App
