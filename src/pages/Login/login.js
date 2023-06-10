import logo from "../../assets/logo2-login.png";
import arrow from "../../assets/icone-entrar.svg";
import "../../styles/login.css";
import "../../styles/validateLog.css"
import React, { useState } from "react";
import ValidateLog from "./validateLog";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const usuario = event.target.elements.usuario.value;
    const senha = event.target.elements.senha.value;

    if (usuario === "Kaique" && senha === "teste123") {
      setIsLoggedIn(true);
      setUserId(usuario);
    } else {
      alert("Usuário inválido");
    }
  };

  if (isLoggedIn) {
    return (
      <>
        <ValidateLog userId={userId} />
      </>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="TotalControl" />
        <span>Login</span>
      </header>

      <form onSubmit={handleLogin}>
        <div className="inputContainer">
          <label htmlFor="Usuario">Usuário</label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Digite seu usuário"
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
          />
        </div>

        <a href="">Esqueceu sua senha?</a>
        <button className="button" type="submit">
          <img src={arrow} alt="" />
          Entrar
        </button>

        <div className="footer">
          <p>O controle das suas finanças começa agora!</p>
        </div>
      </form>
    </div>
  );
}

export default LoginApp;