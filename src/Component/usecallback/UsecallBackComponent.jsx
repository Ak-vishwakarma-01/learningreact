import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
/*
  the usecallback hook is used to memorize the functions especially when pasing
  function to down to child component, It helps optimize performance by preventing 
  unneccessary re-creation of functions during re-renders.

  means it does'nt make new function everytime when it re-renders
  when state changes then creates the new function and usecallback stop it and memoize it
  just write the function inside the usecallback then it will not create everytime new function
 */

const UsecallBackComponent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleClick = useCallback(() => setCounter1(counter1 + 1), [counter1]);
  
  return (
    <div>
      UsecallBackComponent
      <h1>counter2 = {counter2}</h1>
      <ChildComponent handleClick={handleClick} />
      <button onClick={() => setCounter2(counter2 + 1)}>
        counter 2 Increase
      </button>
    </div>
  );
  
};

export default UsecallBackComponent;
