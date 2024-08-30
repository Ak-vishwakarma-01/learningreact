import React, { useRef } from 'react'
// when user forgot to fill one thing then we need to focus on that one thing
const UseRef = () => {
    
    const myRef = useRef(null)
    console.log(myRef);

    const focusInput =()=>{
        myRef.current.focus();
    }
  return (
    <div>
        <input ref={myRef} type='text'/>
        <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default UseRef