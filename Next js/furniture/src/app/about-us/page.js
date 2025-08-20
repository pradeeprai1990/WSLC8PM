import React from 'react'
import AboutContent from './AboutContent'
import Breadcrumb from '../common/Breadcrumb'

export default function Aboutus() {
  
    let pageName="About Us"
  //About Page Small Compontents
  return (
    <div>
        <Breadcrumb pageName={pageName}/>
        <AboutContent/>
    </div>
  )
}
