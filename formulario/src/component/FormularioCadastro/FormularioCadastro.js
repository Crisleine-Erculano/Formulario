import React, { useEffect, useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosDoUsuario";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from '@mui/material';

function FormularioCadastro(aoEnviar, validacoes) {
   const [etapaAtual, setEtapaAtual] = useState(0);
   const [dadosColetados, setDados] = useState({});
   
   useEffect(()=>{
      if(etapaAtual === formularios.length){
         aoEnviar(dadosColetados);
      }      
   })
   const formularios = [
      <DadosUsuario aoEnviar={coletarDados}  />,
      <DadosPessoais aoEnviar={coletarDados}  />,
      <DadosEntrega aoEnviar={coletarDados}  />,
      <Typography variant="h5">Obrigada pelo Cadastro!</Typography>
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
      <Stepper activeStep={etapaAtual}>
         <Step><StepLabel>Login</StepLabel></Step>
         <Step><StepLabel>Pessoal</StepLabel></Step>
         <Step><StepLabel>Entrega</StepLabel></Step>
         <Step><StepLabel>Finalização</StepLabel></Step>

      </Stepper>
         {formularios[etapaAtual]}
      </>
   )

}

//<DadosPessoais  />
//<DadosUsuario />
export default FormularioCadastro