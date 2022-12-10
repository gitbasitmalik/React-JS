import { useRef } from "react";

function UseRef() 
{

    const ref = useRef(null);
    function handleRef() 
    {
        ref.current.focus();
    }
    return ( 
        <div>
            <input ref={ref} type="text"/>
            <button style={{border: "1px solid black"}} onClick={handleRef} >Focus </button>
        </div>
     );
}

export default UseRef;
