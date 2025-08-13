import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Mainlayout from './common/Mainlayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './common/Product.jsx'
import MainContext from './MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <MainContext>

      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/product' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

      
    </MainContext>


  </StrictMode>,
)
