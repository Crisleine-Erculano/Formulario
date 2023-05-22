function validarCPF(cpf) {
   if (cpf.length !== 11) {
     return { valido: false, texto: "O CPF deve ter 11 dígitos." };
   } else {
     return { valido: true, texto: "" };
 
   }
 }
// Validação de senha.
 function validarSenha(senha) {
   if (senha.length < 4 || senha.length > 72) {
     return { valido: false, texto: "Senha deve ter 4 e 72 dígitos." };
   } else {
     return { valido: true, texto: "" };
 
   }
 }
// Vou colocar um export e vou exportar elas como um objeto.
 export{validarCPF, validarSenha}