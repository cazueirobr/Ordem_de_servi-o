


$('#temaazul').click(function(){
  localStorage.colorTheme = 'table table-primary table-hover';
  $('#selecione').attr('title','Tema atual: azul');
})

$('#temaverde').click(function(){
  localStorage.colorTheme = 'table table-success table-hover';
  $('#selecione').attr('title','Tema atual: verde');
})

$('#temapreto').click(function(){
  localStorage.colorTheme = 'table table-dark table-hover';
  $('#selecione').attr('title','Tema atual: preto');
})

$('#temapadrao').click(function(){
    localStorage.colorTheme = 'table table-hover';
    $('#selecione').attr('title','Tema atual: padrao');
})