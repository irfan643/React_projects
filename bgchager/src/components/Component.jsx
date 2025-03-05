import React, { useState } from 'react'
import { Button } from "./Btn"
const Component = () => {
            let [color,setcolor]= useState("skyblue");
  return (
  
  <div className='w-full h-screen duration-200 relative  'style={{backgroundColor:color}}>
    <div className="bg-sky-100 flex absolute bottom-0 transform -translate-x-1/2 left-1/2  justify-center  p-4 rounded-lg shadow-lg">
    <Button color="black" setColor={setcolor} />
    <Button color="blue" setColor={setcolor} />
    <Button color="green " setColor={setcolor} />
    <Button color="coral" setColor={setcolor} />
    <Button color="orange" setColor={setcolor} />
    <Button color="yellow" setColor={setcolor} />
    <Button color="pink" setColor={setcolor} />
    </div>
  </div>
    
  )
}
export default Component;