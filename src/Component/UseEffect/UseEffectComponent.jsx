import React, { useEffect, useState } from 'react'
//It run once when we reload browser
// when we need to fetch the data we use useeffect
const UseEffectComponent = () => {
    //it is a predefined function
    
    const[count,setCount] = useState(0);
    
    useEffect(()=>{ 
        
        const fetchdata = async()=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/todos');
            const result = await api.json()
            console.log(result);
            console.table(result);
        }
        fetchdata()
        document.title = count;   
    },[count]) // useeffct runs everytime whenever count changes 

  return (
    <div>UseEffectComponent
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Icrease</button>
    </div>
  )
}

export default UseEffectComponent