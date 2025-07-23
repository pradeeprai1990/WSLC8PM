import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import AboutUs from './components/pages/About'
import { BrowserRouter, Route, Routes } from 'react-router'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Layout from './components/common/Layout'
import Login from './components/pages/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
           {/* http://localhost:5173/ */}
           <Route element={<Layout/>}>

              <Route path='/' element={<Home/>}/>
              {/* http://localhost:5173/about-us */}
              <Route path='/about-us' element={<AboutUs/>}/>
                {/* http://localhost:5173/services */}
              <Route path='/services' element={<Services/>}/>
                {/* http://localhost:5173/contact */}
              <Route path='/contact' element={<Contact/>}/>
            

            </Route>

            <Route path='/login' element={<Login/>}/>

        </Routes>
     </BrowserRouter>
  </StrictMode>,
)
