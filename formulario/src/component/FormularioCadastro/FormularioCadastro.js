import React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'

function FormularioCadastro() {
   return (
      <form>
         <TextField id="nome" label="Nome" />
      
         
         <label>Sobrenome</label>
         <input type="text" />
         
         <label>CPF</label>
         <input type="text" />
         
         <label>Promoções</label>
         <input type="checkbox" />
         
         <label>Novidades</label>
         <input type="checkbox" />

         <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </form>
   )

}
export default FormularioCadastro