//letiaveis para definir o tempo de sessão
let timer = new Date(); //Definindo um ponteiro de data
let openSession = timer.getMinutes(); //Pega o minuto atual
let timing =  1; //tempo em minutos da sessão
let usuarioAtual = document.getElementById("usuario");
usuarioAtual.innerHTML = `Loguin atual: ${localStorage.getItem("user")}!`;
'use strict';

function restartSession() {
  let aux = new Date(); //No codigo anterior "Date;" no codigo atual usando jshitn "Date();"
  openSession = aux.getMinutes();
}

//Função para calcular quando a sessão ira expirar
let sessionTime = function(start, end) { //Função anonima com parametro
  end = parseInt(end, 10);
  //Ifs e elses para caso o tempo de sessão definida seja alterado, tambem terá um retorno para utilizar em outra função anonima
  if (start + end > 60) return start + end - 60;
  return start + end;
  };

//Função para redirecionar o usuario apos expirar a sessão
let timeUp = function() {
  let aux = new Date();
  console.log(openSession);
  if (aux.getMinutes() == sessionTime(openSession, timing)) window.location.href = '/index.html';

};
//Função para renolet a sessão a cada click do usuario
window.onload = function() {
  document.onclick = function() {  //tratador de evento no modo tradicional
    restartSession();
    console.log(openSession);
  };
};

let session_state = setInterval(timeUp,60000); //Executando verificação de tempo a cada 60 segundos


