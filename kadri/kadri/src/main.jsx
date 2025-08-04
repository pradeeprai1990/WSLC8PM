import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'

import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './component/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Home/>
    */}
    <BrowserRouter>
    <Routes>
    <Route element={<Layout/>}>

   
         <Route path='/' element={<Home/>}></Route>
         <Route path='/cartpage' element={<Cart/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         {/* <Route path='*' element={</>}></Route> */}

            </Route>

     
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
