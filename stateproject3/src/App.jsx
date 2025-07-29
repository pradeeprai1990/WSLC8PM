import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [count1, setCount1] = useState(1)

  let getCategory = () => {
    console.log("Category")
  }

  let getProduct = () => {
    console.log("Product")
  }



  // useEffect(()=>{
  //   getCategory()
  //   getProduct()
  // },[])

  useEffect(()=>{
    getCategory()
    getProduct()
  },[])

  return (
    <>
      <center>
        <h1 style={{ textAlign: "center" }}>  {count} </h1>
        <button onClick={()=>setCount(count+1)}>Change Count</button>


        <h1 style={{ textAlign: "center" }}>  {count1} </h1>
        <button onClick={()=>setCount1(count1+1)}>Change Count 1</button>
      </center>
    </>
  )
}

export default App
