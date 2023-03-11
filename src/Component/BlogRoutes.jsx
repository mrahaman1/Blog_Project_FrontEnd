import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
import Hollywood from '../Pages/Hollywood'
import Technology from '../Pages/Technology'
import SingleBlogPage from '../Pages/SingleBlogPage'
import DetailPage from '../Pages/DetailPage'


const BlogRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/hollywood' element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path=":category/articleid" element={<SingleBlogPage />} />
            <Route path="*" element={<DetailPage/>} />
        </Routes>
   
   
  )
}

export default BlogRoutes