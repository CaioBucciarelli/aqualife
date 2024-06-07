/*************************************************************** VERIFICAÇÃO LOGIN ***************************************************************/

function validarLogin(){
  let usuario = document.getElementById('nome').value;
  let senha = document.getElementById('senha').value;
  let dica = document.getElementById('dica');

  if(usuario == 'caio' && senha == 1234){
    alert("Login com sucesso!");
    dica.innerText = "" 
  }
  else{
    alert("Login errado!");
    dica.innerText = "Dica: sequencia de números"
  }
}