import React from "react";
import "../../styles/validateLog.css";

function ValidateLog(props) {
  return (
    <>
      <div class="validate">
        <h1 class="line typing-animation">Olá, {props.userId}!</h1>
        <br />
      </div>
      <div class="ancora">
        <a class="ancoraCarregar" href="aplicativo.js">
          {" "}
          Começar
        </a>
      </div>
    </>
  );
}
export default ValidateLog;
