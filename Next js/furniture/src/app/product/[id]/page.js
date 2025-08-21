"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function ProductDetails() {
  let data  =useParams()
  console.log(data); //{ id:1 }
  return (
    <div>page</div>
  )
}
