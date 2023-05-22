import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar, validacoes }) {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [erros, setErros] = useState({ senha: { valido: true, texto: '' } });

   function validarCampos(evento) {
      const { name, value } = evento.target;
      const novoEstado = { ...erros };
      novoEstado[name] = validacoes[name](value);;
      setErros(novoEstado);
   }
   return (
      <form onSubmit={(evento) => {
         evento.preventDefault();
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