import "./Quiz3.css"

function Quiz3 () {
    return (
        <div className="centro">
            <div>
                <h1 className='pergunta'>Em que país vivemos ?</h1> 
            </div>
            <div className="respostas">
                <a id="a1" href="/error2">Brasil</a>
                <a id="a2" href="/error2">Sudão do Sul</a>
                <a id="a3" href="/correto2">Moçambique</a>
                <a id="a4" href="/final">Brazil</a>
            </div>

        </div>
    );
}

export default Quiz3;