import './style.css'
// import { useState } from "react";
function Square({value,onSquareClick}){
    // const [value,setValue] = useState(null)
    // function handleClick(){
    //     setValue((prevClick)=>(prevClick === 'X'?'O':'X'))
    //     console.log('Clicked!!!!!')
    // }
    return(
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}
export default Square;
