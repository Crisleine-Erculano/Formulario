import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import ValidacoesCadastro from '../../context/ValidacoesCadastro';


function DadosPessoais(aoEnviar) {
   const [nome, setNome] = useState("");
   const [sobrenome, setSobrenome] = useState("");
   const [cpf, setCpf] = useState("");
   const [promocoes, setPromocoes] = useState("true");
   const [novidades, setNovidades] = useState("false");
   const [erros, setErros] = useState({
      cpf: { valido: true, texto: '' },
      nome: { valido: true, texto: '' }
   });

   const validacoes = useContext(ValidacoesCadastro);
   function validarCampos(evento) {
      const { name, value } = evento.target;
      const novoEstado = { ...erros };
      novoEstado[name] = validacoes[name](value);;
      setErros(novoEstado);
   }

   function possoEnviar() {
      for (let campo in erros) {
         if (!erros[campo].valido) {
            return false;
         }
      }
      return true;
   }
   return (

      <form onSubmit={(evento) => {
         evento.preventDefault();
         if (possoEnviar()) {
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
         }
      }}>
         <TextField
            value={nome}
            onChange={(evento) => {
               setNome(evento.target.value);
            }
            }
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome"
            label="Nome"
            margin="normal"
            name="nome"
            fullWidth
         />

         <TextField
            value={sobrenome}
            onChange={(evento) => {
               setSobrenome(evento.target.value);
            }
            }
            id="sobrenome"
            label="Sobrenome"
            margin="normal"
            name="sobrenome"
            fullWidth
         />

         <TextField
            value={cpf}
            onChange={(evento) => {
               setCpf(evento.target.value);
            }
            }
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="cpf"
            label="CPF"
            margin="normal"
            name="cpf"
            fullWidth
         />

         <FormControlLabel
            label="Promoções"
            control={<Switch
               checked={promocoes}
               onChange={(evento) => {
                  setPromocoes(evento.target.checked)
               }} name="promocoes" color="primary" />}
         />

         <FormControlLabel
            label="Novidades"
            control={<Switch
               ckecked={novidades}
               onChange={(evento) => {
                  setNovidades(evento.target.checked)
               }} name="novidades" color="primary" />}
         />

         <Button
            type="submit"
            variant="contained"
            color="primary"
         >Cadastrar
         </Button>
      </form>
   )

}
export default DadosPessoais