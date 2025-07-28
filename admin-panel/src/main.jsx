import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/pages/Login.jsx'
import Layout from './components/common/Layout.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import User from './components/pages/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/user' element={<User/>}/>
            </Route>
            <Route path='/' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
