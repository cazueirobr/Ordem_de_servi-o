'use strict';
  let usuarioAtual = document.getElementById("usuario");
  usuarioAtual.innerHTML = `Loguin atual: ${localStorage.getItem("user")}!`;



//Slide e tratador de evento
$('#dropdowndonavbar2').click(function(){
  $('#dropdown2options').slideToggle(1000);
  });