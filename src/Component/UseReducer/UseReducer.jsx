import React, { useReducer } from 'react'

const UseReducer = () => {

    const countReducer = (state,action)=>{
      switch(action.type){
        case "Increament":
          return{count:state.count+1}
        case "Decreament":
          return{count:state.count-1};
        default:
          return state;
      }
    }
    const [state,dispatch] = useReducer(countReducer,{count:0});
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"Increament"})}>Increament</button>
      <button onClick={()=>dispatch({type:"Decreament"})}>Increament</button>
    </div>
  )
}

export default UseReducer