
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  // let count=1
  // let changeCount=()=>{
  //    count=count+1  //1+1 = 2
  //    console.log(count)
  // }

//  let addData=(num1,num2)=>{
//     console.log(num1+num2)
//  }
  let  [ count,setCount ]=useState(1)

  // let changeCount=()=>{
    
  //   setCount(count+1) //3+1
  // }

  let [password,setPassword]=useState(false)
  console.log(password)
  return (
    <>

      <input type={ password ? 'text' : 'password' } />
      <button onClick={()=>setPassword(  !password )}> { password ? "hide" : "show"   }  </button>

        {/* <h1>Welcome</h1> */}
         {/* <button onClick={ ()=>addData(25,55) }>Add</button>
         <button onClick={ ()=>addData(99,77) }>Add</button> */}
         <h1> {count}  </h1>
        <button onClick={ ()=>setCount(count+1) }>Change Count</button>

        {/* <button onClick={ ()=>{
            alert("Hello")
        } }>
          Change Count
          </button> */}
    </>
  )
}

export default App
