import React from "react";
import "../../styles/faleConosco.css";
import imagem from "../../assets/formulario-img.jpg";

function FaleConosco() {
  return (
    <>
      <div>
        <h1 id="tituloFormulario">Nos de sua opinião!</h1>
      </div>

      <div className="containerForm">
        <form
          id="faleConosco"
          action="https://api.sheetmonkey.io/form/7G7HnYRkMtEtvovkgFLcSM"
          method="post"
        >
          <div id="inputs">
            <label className="formLabel">
              Nome:{" "}
              <input
                className="inputsForm"
                type="text"
                name="Name"
                placeholder="Insira seu nome"
                required
              />
            </label>
            <label className="formLabel">
              Email:{" "}
              <input
                className="inputsForm"
                type="email"
                name="Email"
                placeholder="Insira seu email"
                required
              />
            </label>
            <label className="formLabel">
            Sugestões:{" "}
              <input
                className="inputsForm"
                type="text"
                name="sugestões"
                placeholder="envie sua sugestão :D"
                required
              />
            </label>
            <input
              className="inputsForm"
              type="hidden"
              name="Created"
              value="x-sheetmonkey-current-date-time"
            />
            <input id="submitForm" type="submit" value="Enviar" />
          </div>
        </form>
        <div id="imagemFormulario">
          <img id="imagemForm" src={imagem} alt="TotalControl" />
        </div>
      </div>
    </>
  );
}

export default FaleConosco;
