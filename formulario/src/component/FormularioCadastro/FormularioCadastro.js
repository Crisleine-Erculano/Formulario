import React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'

function FormularioCadastro() {
   return (
      <form>
         <TextField id="nome" label="Nome" margin="normal" fullWidth />
         
         <TextField id="sobrenome" label="Sobrenome" margin="normal" fullWidth />
         
         <TextField id="cpf" label="CPF" margin="normal" fullWidth />

         {/* <label>Promoções</label>
         <input type="checkbox" />
         
         <label>Novidades</label>
         <input type="checkbox" /> */}

         <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </form>
   )

}
export default FormularioCadastro