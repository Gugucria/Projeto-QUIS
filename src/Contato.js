import "./Contato.css";
import imagem1 from './Email.png';
import imagem2 from './Git.png';
import imagem3 from './Linkedin.png';

function Contato () {
    return (
  
            <div className="containerr">
           <div className="card">
               <div><img src={imagem3}/></div>
               <p className="idd">Linkedin</p>
               <div className="content">
                    <a href="https://www.linkedin.com/in/gustavo-oliveira-ab11b6237/">Link</a>
               </div>
           </div>
           
           <div className="container2">
           <div className="card2">
               <div><img src={imagem2} width="100px"/></div>
               <p className="idd2">GitHub</p>
               <div className="content2">
                    <a href="https://github.com/Gugucria">Link</a>
               </div>
           </div>
           <div className="container3">
           <div className="card3">
               <div><img src={imagem1} width="100px"/></div>
               <p className="idd3">Email</p>
               <div className="content3">
                    <a href="mailto:gustavinoliveira777@gmail.com">Link</a>
               </div>
           </div>
        </div>
        </div>
        </div>
    );
}

export default Contato;

/*<div>
                <p className="links">Email: gustavinoliveira@gmail.com</p>
                <br/>
                <p className="links">Linkedin: https://www.linkedin.com/in/gustavo-oliveira-ab11b6237</p>
                <br/>
                <p className="links">GitHub: https://github.com/Gugucria</p>*/