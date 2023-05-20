import React, { useEffect, useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosDoUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro(aoEnviar, validarCPF) {
   const [etapaAtual, setEtapaAtual] = useState(0);
   const [dadosColetados, setDados] = useState({});

   const formularios = [
      <DadosUsuario aoEnviar={coletarDados} />,
      <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
      <DadosEntrega aoEnviar={coletarDados} />
   ]
   function coletarDados(dados){
      setDados({...dadosColetados, ...dados})
      proximo();

   }

   function proximo() {
      setEtapaAtual(etapaAtual + 1)
   }

   return (
      <>
         {formularios[etapaAtual]}
      </>
   )

}

//<DadosPessoais  />
//<DadosUsuario />
export default FormularioCadastro