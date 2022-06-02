import "./Quiz3.css"
import Resultado from "./Resultado.js";
import { useState } from "react";

function Quiz3 () {
    const [ clicou, setClicou] = useState(false);
    const [resultado, setResultado] = useState('');

    return (
            <div className="centroooo">
                    <p className="perguntaaaa">Qual o resultado de 200 : 2 ?</p> 
                {
                    clicou ?
                    <Resultado resultado={resultado} next={"/final"}></Resultado>
                    :
                    <div className="respostassss">
                        <a id="zu" onClick={()=> {setClicou(true); setResultado(false);}}>5</a>
                        <a id="zuu" onClick={()=> {setClicou(true); setResultado(false);}}>200</a>
                        <a id="zuuu" onClick={()=> {setClicou(true); setResultado(false);}}>400</a>
                        <a id="zuuu" onClick={()=> {setClicou(true); setResultado(true);}}>100</a>
                    </div>
                }
            </div>
        );
    }

export default Quiz3;