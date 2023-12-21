"use client"
import React, { useState } from "react";
import css from "./bgimagecreat.css";
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  let [completetask, setcompletetask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { title, desc }])


    settitle("");
    setdesc("");
    console.log(completetask)
  }
  const deletehandler=(i) =>{
    let copytask=[...maintask];
    let vec=copytask.splice(i,1);
    setcompletetask([...vec,{title,desc}]);
    setmaintask(copytask);
  }
  let renderTask = <h2>No Task Available</h2>
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return <li>
        <div className="flex justify-between text-3xl font-semibold m-3">
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
        <button onClick={deletehandler} className="rounded m-3 px-2 py-3 bg-teal-500">Delete</button>
      </div>
      
      </li>

    })
  }

  return <div className="css.bg">
    <h1 className="bg-black text-white text-2xl text-center">Prakash todo list</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className="text-3xl m-5 px-2 py-2" placeholder="Enter Title here"
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }} />
      <input type="text" className="text-3xl m-5 px-2 py-2" placeholder="Enter discription here"
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value)
        }}
      />
      <button className="text-white bg-black rounded px-4 py-2 m-5 text-2xl  font-bold">Add task</button>
    </form>
    <hr />
    <div className="p-8 bg-red-100">
      <ul>
        {renderTask}
      </ul>
    </div>
  </div>
}
export default page;