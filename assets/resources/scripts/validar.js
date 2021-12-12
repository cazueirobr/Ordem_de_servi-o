//Acesso ao formulario via hierarquia
let form = document.forms[0];
let emailInput = form.elements[3];
'use strict';	
emailInput.addEventListener('invalid', function() {
  this.setCustomValidity(this.validity.typeMismatch ? 'O email está invalido :/ Verifique ele novamente' : ''); //Customizando os baloes de aviso
});

function selectValidation() {
  let selectbox = document.getElementById('solucionador');
  var value = selectbox.options[selectbox.selectedIndex].value;
  if (value == '') document.getElementById('tecnico').innerHTML = "Selecione um tecnico";

}
