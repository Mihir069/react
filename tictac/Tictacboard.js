import { useState } from "react";
import Square from './Square';
function Tictacboard({xnext,square,onPlay}){//xnext,square,onPlay
    const [xIsnext,setxIsnext] = useState(true)
    const [statesquare,setsquareState] = useState(Array(9).fill(null));
    function handleClick(i){
        if(statesquare[i]){
            return;
        }
        // setsquareState((changeClick)=>(changeClick === 'X'?'O':'X'))
        const next = statesquare.slice();
        if(xIsnext){
            next[i] = 'X'
        }
        else{
            next[i] = 'O'
        }
        onPlay(next)
        setsquareState(next);
        setxIsnext(!xIsnext)
        console.log('statesquare:', statesquare);
        console.log('next[i]:', next[i]);

        if(statesquare[i] || Winner(statesquare)){
            return
        }
    }
    const win = Winner(statesquare);
    let status;
    if(win){
        status = 'Winner :' + win
    }
    else{
        status = "Next player : " + (xIsnext ? 'X':'O')
    }
    return(
        <div className="container">
            <div>{status}</div>
            <div className="line">
                <Square value={statesquare[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={statesquare[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={statesquare[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div className="line">
                <Square value={statesquare[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={statesquare[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={statesquare[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div className="line">
                <Square value={statesquare[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={statesquare[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={statesquare[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
        </div>
    )
}
function Winner(statesquare){
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i = 0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(statesquare[a] && statesquare[a] === statesquare[b] && statesquare[a] === statesquare[c]){
            return statesquare[a]
        }
    }
    return ; 
}
export default Tictacboard;
