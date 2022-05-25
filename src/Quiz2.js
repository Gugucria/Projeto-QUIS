import "./Quiz2.css"

function Quiz2 () {
    return (
        <div className="centro">
            <div>
                <h1 className='pergunta'>Quanto é 5 + 5 ?</h1> 
            </div>
            <div className="respostas">
                <a id="a1" href="/error2">99</a>
                <a id="a2" href="/error2">9</a>
                <a id="a3" href="/error2">834</a>
                <a id="a4" href="/correto2">10</a>
            </div>

        </div>
    );
}

export default Quiz2;