import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './component/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" component="h1" aling="center">Formulário de Cadastro</Typography>
        <FormularioCadastro />
      </Container>

    );
  }
}

export default App;
