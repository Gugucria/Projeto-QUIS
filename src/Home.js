import "./Home.css";
import imagem1 from './Q.png';

function Home () {
    return(
<div>

<section>
    <div className="container4">
        <div className="card">
            <div><img src={imagem1}/></div>
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