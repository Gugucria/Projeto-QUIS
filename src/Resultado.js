import "./Resultado.css";
import imagem from './QUIS15.png';
import { useState } from "react";
import { Link } from "react-router-dom";

function Resultado (props) {
  

    return (
        <div className="container">
           <div className="card">
               <div><img src={imagem} width="100px"/></div>
               <p className="idd">{props.resultado ? "Correto" : "Falso"}</p>
               <div className="content">
                    <Link to={props.next}>Proxima pergunta</Link>
               </div>
           </div>
        </div>
    );
}

export default Resultado;