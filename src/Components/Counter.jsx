import React, { useState } from 'react'

function Counter() {
  //state creation
  const[counter,setCounter]=useState(0)

  //function creation
  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    setCounter(counter-1)
  }
  function reset(){
    setCounter(0)
  }
  return (
    <div style={{textAlign:'center',padding:'20px'}}>
      <h1 style={{padding:'60px'}}>{counter}</h1>
      <button style={{width:'50px',margin:'30px',borderRadius:'40px',border:'none',backgroundColor:'skyblue',padding:'10px',height:'50px'}} onClick={increment}><h2>+</h2></button>
      <button style={{width:'50px',margin:'30px',borderRadius:'40px',border:'none',backgroundColor:'crimson',padding:'10px',height:'50px'}} onClick={decrement}><h2>-</h2></button>
      <button style={{width:'70px',margin:'30px',borderRadius:'40px',border:'none',backgroundColor:'palegreen',padding:'10px',height:'50px'}} onClick={reset}><h2>Reset</h2></button>
      </div>
  )
}

export default Counter