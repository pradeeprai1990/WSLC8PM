import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  let [userText, setUsertext] = useState('')
  let [allTodoList, setAllTodoList] = useState([])

  let addTodo = (event) => {

    let obj = {
      title: userText,
      isStatus: true
    }

    //allTodoList filter() ->Multiple value =[]
    //allTodoList find() ->singlelement ->single Object

    let checktoDo = allTodoList.find((obj) => obj.title == userText) //{ title:"html",isStatus:true }

    if (checktoDo) {
      toast.error("Todo List Aleady Added")
    }
    else {
      setAllTodoList([...allTodoList, obj])
      toast.success("Todo List Added in My List")
      setUsertext('')
    }

    event.preventDefault()
  }

  let changeStatus = (currentIndex) => {
     let oldData=[...allTodoList] //Shallow Copy //[{…}, {…}, {…}, {…}]
    
     oldData[currentIndex].isStatus=!oldData[currentIndex].isStatus

     console.log(oldData);
     
    //  setAllTodoList(oldData)
     
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            ✨ Todo List
          </h1>
          <p className="text-gray-600 text-lg font-medium">
            Stay organized and productive
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Input Section */}
          <div className="mb-8">
            <form className="flex gap-3" onSubmit={addTodo}>
              <input
                type="text"
                placeholder="Add a new task..."
                value={userText}
                onChange={(e) => setUsertext(e.target.value)}

                className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
              <button
                type='submit'
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[60px]"
              >
                <span className="text-2xl">+</span>
              </button>
            </form>
          </div>

          <div>
            <ul>
              {
                allTodoList.length >= 1 ?
                  allTodoList.map((items, index) => {
                    return (
                      <li

                        key={index} className={`p-3 text-[20px] border-b-1 relative 

                          ${items.isStatus ? '' : 'line-through'}
                          
                          `}>
                        <span onClick={() => changeStatus(index)}>
                          {items.title}
                        </span>



                        <button className='bg-red-500 absolute right-0 p-2 text-[12px] text-white font-black' >Delete</button>  </li>
                    )
                  })

                  :
                  <li> No Data Found </li>
              }

            </ul>
          </div>


        </div>

      </div>

      <ToastContainer />

    </div>
  )
}

export default App
