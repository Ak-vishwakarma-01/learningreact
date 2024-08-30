import React, { useEffect, useLayoutEffect, useState } from 'react'
// useLayoutEffect runs before useeffect
const UseLayoutCoponentl = () => {

  const [bgColor,setBgColor] = useState('yellow')

  useEffect(() => {
    console.log("useeffect is running...")
  }, [])
  
   useLayoutEffect(() => {
    console.log("useLayout is running>> ")
      document.body.style.backgroundColor = bgColor
  }, [bgColor])

  
  return (
    <div>
      UseLayoutCoponent
      <button onClick={()=>setBgColor('red')}> changecolor</button>
    </div>
  )
}

export default UseLayoutCoponentl