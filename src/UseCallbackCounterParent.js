import {useState, useCallback} from 'react';
import UseCallbackCounterChild from './UseCallbackCounterChild';

function UseCallbackCounterParent() {
  const [incrementValue, setIncrementValue] = useState(0);
  const [mulValue, setMulValue] = useState(2);

  const increment = useCallback(
    ()=>setIncrementValue(incrementValue+1), 
    [incrementValue]
  );

  const multiply = useCallback(
    ()=>setMulValue(mulValue*2),
    [mulValue]  
  );

  return(
  <div>
      <h2>increment value : {incrementValue}</h2>
      <UseCallbackCounterChild handleClick={increment} value={incrementValue} >increment</UseCallbackCounterChild>
      <h2>multiply value : {mulValue}</h2>
      <UseCallbackCounterChild handleClick={multiply} value={mulValue} >multiply</UseCallbackCounterChild>
  </div>
  );
}

export default UseCallbackCounterParent;
