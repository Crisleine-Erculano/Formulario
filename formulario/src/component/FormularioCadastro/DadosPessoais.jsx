import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";


function DadosPessoais(aoEnviar, validarCPF) {
   const [nome, setNome] = useState("");
   const [sobrenome, setSobrenome] = useState("");
   const [cpf, setCpf] = useState("");
   const [promocoes, setPromocoes] = useState("true");
   const [novidades, setNovidades] = useState("false");
   const [erros, setErros] = useState({cpf:{valido:true, texto:''}});
   return (
      
      <form onSubmit={(evento) => {
         evento.preventDefault();
         aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
      }}>
         <TextField
            value={nome}
            onChange={(evento) => {
               setNome(evento.target.value);
            }
            }
            id="nome"
            label="Nome"
            margin="normal"
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
            fullWidth
         />

         <TextField
            value={cpf}
            onChange={(evento) => {
               setCpf(evento.target.value);
            }
            }
            onBlur={(evento)=>{
               const ehValido= validarCPF(evento.target.value)
               setErros({cpf:ehValido});
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="cpf"
            label="CPF"
            margin="normal"
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