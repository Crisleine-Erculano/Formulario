import { TextField, Button } from '@mui/material';
import React from 'react';

function DadosUsuario() {
   return (
      <form>
         <TextField
            id="email"
            label="email"
            type="email"
            margin="normal"
            variant="outlined"
            fullWidth
         />
         <TextField
            id="password"
            label="password"
            type="password"
            margin="normal"
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