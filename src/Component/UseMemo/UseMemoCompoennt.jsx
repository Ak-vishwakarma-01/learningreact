import React, { useMemo, useState } from 'react'
/*
  It memorize the value not the function
 */

const UseMemoCompoennt = () => {

    const [inputvalue,setInputvalue] = useState(" ");

    // const calculateResult = (input)=>{
    //     console.log("calculating result");  
    //     return input.length*100;
    // }
    const memoizedResult = useMemo(()=>{return inputvalue.length*100},[inputvalue])

  return (
    <div>UseMemoCompoennt
        <input
        value={inputvalue}
        onChange={(e)=>setInputvalue(e.target.value)}
        type='text'/>
        <h1>Inputvalue = {memoizedResult}</h1>
        <h1>Inputvalue = {inputvalue.length*100}</h1>
    </div>
  )
}

export default UseMemoCompoennt