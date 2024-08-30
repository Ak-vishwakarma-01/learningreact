import React, { useEffect, useLayoutEffect } from "react";
const ChildComponent = ({ handleClick }) => {

  useEffect(() => {
    console.log("child UseEffect is Running");
  }, [handleClick]);

  useLayoutEffect(()=>{
      console.log("child UseLayoutEffect is Running")
  },[handleClick])

  return <div>ChildComponent</div>;
};

export default ChildComponent;
