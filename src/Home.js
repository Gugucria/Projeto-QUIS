import "./Home.css";
import imagem1 from './MATH.png';
import imagem2 from './HISTORY.png';
import imagem3 from './PORTUGUES.png';
import imagem4 from './SOFIA.png';
import imagem5 from './SOCIOLOGIA.png';


function Home () {
    return(
<div>

<section>
    <div className="container4">
        <div className="card">
            <div><img src={imagem1}/></div>
            <a  className="btn" href="/quiz">Clique Aqui</a>
        </div>

        <div className="card">
            <div><img src={imagem2}/></div>
            <a  className="btn" href="/quis">Clique Aqui</a>
        </div>

        <div className="card">
            <div><img src={imagem3}/></div>
            <a  className="btn" href="/quis">Clique Aqui</a>
        </div>

        <div className="card">
            <div><img src={imagem4}/></div>
            <a  className="btn" href="/quis">Clique Aqui</a>
        </div>
        <div className="card">
            <div><img src={imagem5}/></div>
            <a  className="btn" href="/quis">Clique Aqui</a>
        </div>
    </div>
</section>
<section></section>
<section></section>
<section></section>
<section></section>
<section></section>


</div>

);

}

export default Home;