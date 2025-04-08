// import { func } from "prop-types"
import React,{useState} from "react"

function Counter() {
    const [count,setCount]=useState(0)
    function Plus() {
        setCount(count+1)
    }
    function Moins() {
        setCount(count-1)
    }
    
    function Reset() {
        setCount(0)
    }
    return (
        <div className="counter-container" >
            <p className="count-display" >{count}</p>
            <button className="counter-button" onClick={Moins} >moins</button>
            <button className="counter-button" onClick={Reset} >reset</button>
            <button className="counter-button" onClick={Plus} >plus</button>
        </div>
    );
}




export default Counter