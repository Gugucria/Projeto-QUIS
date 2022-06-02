import "./Acabou.css";
import imagem1 from './QUIS15.png';

function Acabou () {
    return (
        <div className="containerrr">
            <div className="card">
               <div><img src={imagem1}/></div>
                <p className="idd">Você chegou ao Fim do nosso QUIS</p>
               <div className="content">
                    <a href="/">Link</a>
               </div>
            </div>
        </div>
    );
}

export default Acabou;