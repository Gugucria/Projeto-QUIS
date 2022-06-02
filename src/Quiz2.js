import "./Quiz2.css"
import Resultado from "./Resultado.js";
import { useState } from "react";

function Quiz2 () {
    const [ clicou, setClicou] = useState(false);
    const [resultado, setResultado] = useState('');

    return (
            <div className="centrooo">
                    <p className="perguntaaa">Qual o resultado de 99 + 1 ?</p> 
                {
                    clicou ?
                    <Resultado resultado={resultado} next={"/quiz3"}></Resultado>
                    :
                    <div className="respostasss">
                        <a id="su" onClick={()=> {setClicou(true); setResultado(false);}}>20 + 20</a>
                        <a id="suu" onClick={()=> {setClicou(true); setResultado(false);}}>99</a>
                        <a id="suuu" onClick={()=> {setClicou(true); setResultado(false);}}>101</a>
                        <a id="suuuu" onClick={()=> {setClicou(true); setResultado(true);}}>100</a>
                    </div>
                }
            </div>
        );
    }
export default Quiz2;