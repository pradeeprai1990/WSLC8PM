import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import { Header } from './common/Header'
import Footer from './common/Footer'
import { Aboutus } from './About'



let rootElement=document.getElementById("root")

createRoot(rootElement).render(
 // HTML CODE || Components
      <> 
        <Header/>
        <hr/>
        <Home/>
        <Aboutus/>
        <hr/>
        <Footer/>
      </>   
    
)

