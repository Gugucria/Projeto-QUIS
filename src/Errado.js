 import "./Errado.css";

function Errado () {
    return (
        <div className="fundo">
            <div className="organizar">
            
            <h1 id="error">A resposta estava errada!</h1>

            <h1 id="correct">A resposta correta era 2</h1>

            <a id="botao" href='/quiz2'>Próxima pergunta</a>
        </div>
        </div>
    );
}

export default Errado;