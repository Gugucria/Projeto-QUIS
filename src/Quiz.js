import "./Quiz.css"
import Resultado from "./Resultado.js";
import { useState } from "react";

function Quiz () {
    const [ clicou, setClicou] = useState(false);
    const [resultado, setResultado] = useState('');
    
    return (
        <div className="centro">
                <p className="perguntaa">Quanto é 1+1 ?</p> 
            {
                clicou ?
                <Resultado resultado={resultado} next={"/quiz2"}></Resultado>
                :
                <div className="respostas">
                    <a id="a1" onClick={()=> {setClicou(true); setResultado(false);}}>1000</a>
                    <a id="a2" onClick={()=> {setClicou(true); setResultado(true);}}>2</a>
                    <a id="a3" onClick={()=> {setClicou(true); setResultado(false);}}>9</a>
                    <a id="a5" onClick={()=> {setClicou(true); setResultado(false);}}>Oque eu to fazendo aqui ?</a>
                </div>
            }
        </div>
    );
}

export default Quiz;