import React from "react";
import "../../styles/sobre.css";
import iconeSobre from "../../assets/iconeSobre.svg";
import logo from "../../assets/logo2-login.png";
function Sobre() {
  return (
    <>
      <div className="containerSobre">
        <div id="TituloSobre">
          <h1>Sobre a Total Control</h1>
          <h3>No controle total, suas finanças brilham!</h3>
        </div>
        <div>
          <img src={iconeSobre} alt="TotalControl" />
        </div>
      </div>
      <h2 id="subtituloSobre">Prazer, somos a Total Control</h2> <br></br>
      <div className="containerSobre2">
        <div>
          <p id="paragrafoSobre">
            No Total Control, acreditamos que o controle financeiro é a{" "}
            <br></br>chave para alcançar a liberdade e o sucesso. Nossa{" "}
            <br></br> plataforma foi criada com o objetivo de oferecer a você{" "}
            <br></br> o máximo controle sobre seus gastos, permitindo que você
            acompanhe e discrimine cada transação de forma fácil <br></br> e
            intuitiva. Com Total Control, você poderá entender exatamente{" "}
            <br></br> onde seu dinheiro está sendo gasto, identificar padrões de{" "}
            <br></br> consumo e tomar decisões mais conscientes sobre suas{" "}
            <br></br> finanças. Nossa abordagem simples e eficiente permite{" "}
            <br></br> que você se torne o mestre das suas próprias finanças,{" "}
            <br></br> possibilitando o planejamento de <br></br>
            metas e o alcance de uma vida financeira saudável. <br></br>{" "}
            Junte-se a nós e comece a trilhar o caminho para o sucesso
            financeiro hoje mesmo!
          </p>
        </div>
        <div>
          <img src={logo} alt="TotalControl" />
        </div>
      </div>
    </>
  );
}
export default Sobre;
