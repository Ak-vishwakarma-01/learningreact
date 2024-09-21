import React, { useRef } from 'react'
// when user forgot to fill one thing then we need to focus on that one thing
//When you pass a ref to a ref attribute in JSX, like <div ref={myRef}> , React will put the corresponding DOM element into myRef.current .
const UseRef = () => {
    
    const myRef = useRef(null)
    console.log(myRef);

    const focusInput = () => {
      if (myRef.current.value === '') {
        myRef.current.focus();
      }
    };

  return (
    <div>
        <input ref={myRef} type='text'/>
        <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default UseRef