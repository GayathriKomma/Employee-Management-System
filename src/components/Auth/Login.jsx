import React, { useState } from "react"


export default function Login(){
  let submitHandler=(event)=>{
    event.preventDefault();
    console.log(`email is ${email} and password is ${password}`);
    setEmail("");
    setPassword("");
  }
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("");
  return (
    <div className="flex h-screen w-screen justify-center items-center">
        
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
         
            <form onSubmit={submitHandler}   className="flex flex-col items-center justify-center">
                <input value={email} required type="email" className=" text-white border-2 outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 rounded-full text-xl px-5 py-4"placeholder="enter email"  
                onChange={(event)=>{
                setEmail(event.target.value)
                }}/>
                <input  value={password} required type="password" className=" text-white border-2 outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 rounded-full mt-3 text-xl px-5 py-4" placeholder="enter password"
                onChange={(event)=>{
                  setPassword(event.target.value)
                  }}/>
                <button className="text-white border-2 outline-none border-none  bg-emerald-600 rounded-full mt-5 text-xl px-5 py-4">Login</button>
            </form>

        </div>
    </div>
  )
}