import { useState } from "react";
import Tictacboard from "./Tictacboard";

function App(){
    const [xIsnext,setxIsnext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0)

    const current = history[currentMove];

    function handlePlay(next){
        const nextHistory = [...history.slice(0, currentMove + 1), next];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
    }
    function jump(nextMove){
        setCurrentMove(nextMove);
    }
    const moves = history.map((square,move)=>{
        let description;
        if(move>0){
            description = 'Go to move :' + move;
        }
        else{
            description = "Go to game start"
        }
        return(
            <li key={move}>
                <button onClick={()=>jump(move)}>{description}</button>
            </li>
        )
    })
    return(
        <div >
            <Tictacboard/>
            <div>
                <Tictacboard xnext={xIsnext} square={current} onPlay={handlePlay}/>
            </div>
            <div>
                {moves}
            </div>
        </div>

    )
}
export default App;
