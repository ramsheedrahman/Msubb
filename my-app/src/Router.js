import React, { useState } from 'react';
import HomeBanner from './Component/HomeBanner/HomeBanner';
import Navbar from './Component/Navbar/Navbar';
import Movielist from './Component/Movielist/Movielist';
import { userContext } from '././Context/Userconext';
import { useContext } from 'react';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Signin from './Component/Signup/Signin';
import Login from './Component/Login/Login';
import Addmovies from './Component/AdminComponents/Addmovies';
import Viewmovies from './Component/AdminComponents/Viewmovies';
import Editproducts from './Component/AdminComponents/Editproducts';
import UserProtected from './Component/ProtectedRoutes/UserProtected';
import Download from './Component/Download';
import About from './Component/About';
function Router() {
 
  const {user}=useContext(userContext)
  
  return (
    <div>
  <Routers>
 
    <Navbar/>
    <Routes>
     <Route path ='/'  element={<HomeBanner/>}/>
     <Route path='/signup'element={<Signin/>}/>
     <Route path='/login' element={<Login/>}/>
     < Route path='/submovies' element={
      <UserProtected User={user}>
       <Movielist/>
      </UserProtected>
     }/>
    <Route path='/subdownloadpage/:id'element={
      <UserProtected User={user}>
         <Download/>
      </UserProtected>
    }/>
      <Route path='/about'element={
      <UserProtected User={user}>
         <About/>
      </UserProtected>
    }/>
     <Route path='admin/addmovies'  element={<Addmovies/>}/>
     <Route path='admin/viewmovies' element={<Viewmovies admin='true'/>}/>
     <Route path='admin/editmovies/:id' element={<Editproducts admin='true'/>}/>
     

    </Routes>
  </Routers>
    </div>
  )
}

export default Router