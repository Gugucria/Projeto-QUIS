import "./Sobre.css"

function Sobre () {
    return (
        <div className="container">
           <div className="estatico">O Quis é</div>
           <ul className="dinamico">
                <li><span>Inovador...</span></li>
                <li><span>Único...</span></li>
                <li><span>Moderno...</span></li>
                <li><span>Engenhoso...</span></li>
           </ul>
        </div>
    );
}

export default Sobre;