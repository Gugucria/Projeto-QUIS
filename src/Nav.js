import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Nav.css";

function Navbar () {
    return(
        <div>
            <nav> 
            
                <a className="logo" href="quis">Quis</a>
              
            <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/escolha">Login</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
            </nav>
        </div>

    );
}

export default Navbar;