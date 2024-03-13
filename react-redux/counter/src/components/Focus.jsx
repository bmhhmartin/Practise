import { useRef } from "react";

const Focus =()=>{


    let myRef = useRef(null);

    const handleFocus =()=>{
        myRef.current.focus();
    }



    return (
        <div onLoad={handleFocus}>
            <input ref={myRef} type="text" />
        </div>
    )
}
export default Focus;