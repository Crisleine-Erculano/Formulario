import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './component/FormularioCadastro/FormularioCadastro';
import { Container } from '@mui/material';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Container>

    );
  }
}

export default App;
