import React from 'react'
import UseReducer from './Component/UseReducer/UseReducer'
import UseEffectComponent from './Component/UseEffect/UseEffectComponent'
import UseRef from './Component/UseRef/UseRef'
import IndianGovernment from './Component/useContext props drilling/IndianGovernment'
import { MoneyState } from './Component/useContext props drilling/Context/MoneyState'
import UseLayoutCoponentl from './Component/UseLayoutEffect/UseLayoutCoponent'
import UsecallBackComponent from './Component/usecallback/UsecallBackComponent'
import UseMemoCompoennt from './Component/UseMemo/UseMemoCompoennt'
const App = () => {
  return (
    <MoneyState>
      {/* <UseReducer/> */}
      {/* <UseEffectComponent/> */}
      <UseRef/>
      {/* <IndianGovernment/> */}
      {/* <UseLayoutCoponentl/> */}
      {/* <UsecallBackComponent/> */}
      {/* <UseMemoCompoennt/> */}
    </MoneyState>
  )
}

export default App