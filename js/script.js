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

/************************************************************** CARROSSEL DINÂMICO **************************************************************/

const imagens = document.getElementById('img');
const imagem = document.querySelectorAll('#img img')

let idx = 0;
function carrossel() {
  idx++

  if (idx > imagem.length - 1) {
    idx = 0;
  }

  imagens.style.transform = `translateX(${-idx * 640}px)`;
}
setInterval(carrossel, 2000)