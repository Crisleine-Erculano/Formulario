import { TextField, Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [erros, setErros] = useState({ senha: { valido: true, texto: '' } });

   const validacoes = useContext(ValidacoesCadastro);
   function validarCampos(evento) {
      const { name, value } = evento.target;
      const novoEstado = { ...erros };
      novoEstado[name] = validacoes[name](value);
      setErros(novoEstado);
   }
   function possoEnviar(){
      for(let campo in erros){
         if(!erros[campo].valido){
            return false;
         }
      }
      return true;
   }

   return (
      <form onSubmit={(evento) => {
         evento.preventDefault();
         if(possoEnviar()){
            aoEnviar({email, senha});
         }
         aoEnviar({ email, senha });
      }}>
         <TextField
            value={email}
            onChange={(evento) => {
               setEmail(evento.target.value);
            }}
            id="email"
            label="email"
            type="email"
            margin="normal"
            variant="outlined"
            fullWidth
         />
         <TextField
            value={senha}
            onChange={(evento) => {
               setSenha(evento.target.value);
            }}

            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="password"
            label="password"
            type="password"
            margin="normal"
            nome="senha"
            variant="outlined"
            fullWidth
         />
         <Button
            type="submit"
            variant="contained"
            color="primary"
         >Cadastrar</Button>
      </form>
   )

}
export default DadosUsuario