import React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'

function FormularioCadastro() {
   return (
      <form>
         <TextField id="nome" label="Nome"  />
         
         <TextField id="sobrenome" label="Sobrenome" />
         <TextField id="cpf" label="CPF" />

         {/* <label>Promoções</label>
         <input type="checkbox" />
         
         <label>Novidades</label>
         <input type="checkbox" /> */}

         <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </form>
   )

}
export default FormularioCadastro