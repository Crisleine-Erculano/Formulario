import { Button, TextField } from '@mui/material';
import React from 'react';

function DadosEntrega(){
   return(
      <form>
         <TextField
            id="cep"
            label="CEP"
            type="number"
            margin="normal"
            variant="outlined"
         />
         <TextField
            id="endereco"
            label="Endereço"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
         />
         <TextField
            id="numero"
            label="Numero"
            type="number"
            margin="normal"
            variant="outlined"
         />
         <TextField
            id="estado"
            label="Estado"
            type="text"
            margin="normal"
            variant="outlined"
         />
         <TextField
            id="cidade"
            label="Cidade"
            type="text"
            margin="normal"
            variant="outlined"
         />
         <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
         >Finalizar Cadastro</Button>
      
      </form>
   )
}
export default DadosEntrega
