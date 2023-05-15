import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";


function FormularioCadastro() {
   return (
      <form>
         <TextField
            id="nome"
            label="Nome"
            margin="normal"
            fullWidth
         />

         <TextField
            id="sobrenome"
            label="Sobrenome"
            margin="normal"
            fullWidth
         />

         <TextField
            id="cpf"
            label="CPF"
            margin="normal"
            fullWidth
         />

         <FormControlLabel
            label="Promoções"
            control={<Switch name="promocao" defaultChecked color="primary" />}
         />

         <FormControlLabel
            label="Novidades"
            control={<Switch name="novidades" color="primary" />}
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
export default FormularioCadastro