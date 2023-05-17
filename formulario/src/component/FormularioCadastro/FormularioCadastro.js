import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosDoUsuario";


function FormularioCadastro(aoEnviar, validarCpf) {
   return (
      <>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      <DadosUsuario />
      </>
   )

}
export default FormularioCadastro