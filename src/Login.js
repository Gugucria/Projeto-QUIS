import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [usuario, setUsuario] = useState('');
	const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

	const criarUsuario = async () => {
		const res = await fetch(
			'http://localhost:3001/usuarios',
			{
				method: 'POST',
				body: JSON.stringify({usuario: usuario, senha: senha}),
				headers: {'Content-Type': 'application/json'}
			}
		);

  
        const dados = await res.json();

		if (res.status === 400) {
			window.alert(dados.msg);
		} else {
			window.alert(dados.msg);
		}
	};

    return (
        <div className="fundoL">

            <div className="centralizar">



                <label className="barra" forHtml="usuario">USUARIO</label>
                <input className="input" 
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                ></input>

                <label className="barra" forHtml="senha">SENHA</label>
                <input
                    className="input"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                ></input>

                <a className="botao btn1" onClick={criarUsuario}>Criar conta</a>
                    <p>{msg}</p>
            </div>

            
        </div>

    );
}

export default Login;