import React, { useContext } from 'react'
import Mycontext from './Context/Mycontext'

export const Janta = () => {

  const data =  useContext(Mycontext);
  console.log("this data is comming form contest" , data);

  return (
    <div>Janta
      <h1>{data.yojna.money}</h1>    
      <h1>{data.yojna.penstion}</h1>
      <h1>{data.yojna.rashan?"milehga":"nhimilega"}</h1>     
      <h2>{data.counter}</h2>
      <button onClick={()=>data.setCounter(data.counter+1)}>Increase</button>
      <button onClick={()=>data.setCounter(data.counter-1)}>Decrease</button>
    </div>
  )
}
