import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosDoUsuario";
import DadosEntrega from "./DadosEntrega";


function FormularioCadastro(aoEnviar, validarCpf) {
   return (
      <>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      <DadosUsuario />
      <DadosEntrega />
      </>
   )

}
export default FormularioCadastro