import React from "react";
import { useState } from "react";


const Counter=()=>{
  const [counter,setCounter]=useState(0)
  function handleCounter()
  {
    setCounter(counter+1)
  }
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button onClick={handleCounter}>Click me</button>
    </div>
  )
}


export default Counter