import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Quis.css";

function Quis () {
    return (
        <div className="centralizar2">
            <div className="fundoq">
            <a id="inicial"href="/quiz">Vamos iniciar o QUIS</a>
            </div>
        </div>
    );
}

export default Quis;