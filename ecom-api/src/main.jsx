import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Common/Header.jsx'
import MidSection from './assets/Components/MidSection.jsx'
import Login from './assets/Components/Login.jsx'
import Register from './assets/Components/Register.jsx'
import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'react-router'
import Cart from './assets/Components/Cart.jsx'
import Product from './assets/Components/Product.jsx'
import MainContext from './MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MidSection></MidSection>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/product' element={<Product></Product>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
          </Routes>
      </BrowserRouter> 
    </MainContext>

  </StrictMode>,
)
