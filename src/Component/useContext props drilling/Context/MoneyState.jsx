import Mycontext from "./Mycontext";

import React, { useState } from 'react'

export const MoneyState = (props) => {

    const yojna ={
        money: 1000,
        rashan: true,
        penstion:500
    };

    const [counter,setCounter] = useState(0);

  return (
    <Mycontext.Provider value={{
        yojna,
        counter,
        setCounter
    }}>
        {props.children}
    </Mycontext.Provider>
  )
}

export default MoneyState