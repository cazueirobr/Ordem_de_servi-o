
//Logins e senhas definidas no sistema
const systemUser = ["teste", "teste","roni","javascript", "matheus","coxinha123"];
'use strict';
$('#usuario').val(localStorage.getItem('user')); //Manipulação de input



//Função para criar uma chave de conexão, mais para frente pode ser utilizada para validar uma sessão
( function() {console.log(Math.floor(Math.random() * (99999999 - 23323232)) + 23323232);} )();//Função auto executavel


//Função para abrir o cadeado, que será chamada ao passar o mouse na imagem ele está no elemento HTML (Inline)
function openPadlock() {
  let state = document.getElementById('cadeado').src; //GetelementbyID
  if (state = './assets/resources/imagens/Cadeado_fechado.jpg') document.getElementById('cadeado').src = 'assets/resources/imagens/Cadeado_aberto.png';
  
}

//Função para fechar o cadeado, que será chamada quando o mouse estiver fora da imagem
function closePadlock() {
  document.querySelector('img').src = './assets/resources/imagens/Cadeado_fechado.jpg'; //QuerySelector
}

//Função para capturar o login e senha e depois validala
function systemLogin() {
  let user = document.getElementsByName('username')[0].value; //getElementsByName
  let password = document.getElementsByTagName('input')[1].value; //getElementsBytagName
  let accept = 0;
  //Comparando se os campos e o login definido 'batem', retornara 1 para caso de certo e 0 para caso não seja semelhante
  systemUser.forEach(function(e, i) {
    if (i % 2 == 0 & user.toLowerCase() == e & password.toLowerCase() == systemUser[i + 1]){ 
      accept = 1;
      localStorage.user = e;
    }; //2 manipulações de String

  });
    
      return accept;
    }

//Função para redirecionar o usuario caso o login esteja certo
function redirect(teste){ //Função recebendo outra função como argumento
  let contador = 0;
  if (teste() == 1){ //Se o retorno da função for 1 o login está correto
    window.location.href = '/sistema/tela-chamado.html';
  }
  else{
      setTimeout(() => {alert('Login errado, tente novamente');}, 1000); //Função aninhada, função usando arrowfunction, setTimeout e alert

    }
  }

//Caso o usuario esqueça de digitar a senha, avise ele
function passwordEmpty() {
  let password = document.getElementsByTagName('input')[1].value;
  if (password == '') alert('Você não digitou a senha!!');

}
