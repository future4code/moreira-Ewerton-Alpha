import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage.js/ErrorPage'



const Router =() =>{
 return 
 <BrowserRouter>
  <Routes>
  
  <Route path='/' element={<HomePage />} />
  
  <Route path='/Register' element={<RegisterPage/>} />
  
  <Route path='/Feed' element={<FeedPage/>} />
  
  <Route path='/Post' element={<PostPage/>} />

  {/* <Route path='/Error' element={<ErrorPage/>} /> */}

  
  
  
  </Routes>
 </BrowserRouter>

}

export default Router 