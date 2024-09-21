import React, { useReducer } from 'react'

// if you have a single state either of a boolean , number , or string use the useState hook. 
// And if you're state is an object or an array, Use the useReducer hook. Especially if it contains states related to each other

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
      <button onClick={()=>dispatch({type:"Decreament"})}>Decreament</button>
    </div>
  )
}

export default UseReducer