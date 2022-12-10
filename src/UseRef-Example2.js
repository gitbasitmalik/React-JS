import { useRef } from "react";

function Counter() 
{

    const ref = useRef(1);
    function increaseCount() {
        ref.current++;
    }
    return ( 
        <div>
            <button onClick={increaseCount} > Count : {ref.current}</button>
        </div>
     );
}

export default Counter;
