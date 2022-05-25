import "./Quiz.css"

function Quiz () {
    return (
        <div className="centro">
            <div>
                <h1 className='pergunta'>Quanto é 1+1 ?</h1> 
            </div>
            <div className="respostas">
                <a id="a1" href="/error">1000</a>
                <a id="a2" href="/correto">2</a>
                <a id="a3" href="/error">9</a>
                <a id="a5" href="/error">Oque eu to fazendo aqui ?</a>
            </div>

        </div>
    );
}

export default Quiz;