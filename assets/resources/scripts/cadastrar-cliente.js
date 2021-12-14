function jsonCreator(){
  let nome = $('#nome').val(); //seletor id
  let email = $(".form-control")[1].value; //seletor classe
  let cpf = $('input')[2].value; //seletor tag
  let telefone = $('#divtelefone input').val(); //seletor ancestral/descendente
  let cidade = $('.form-group > #cidade').val(); //seletor pai/filho
  let endereco = $('#labeldeendereco + .form-control').val(); //seletor anterior/próximo
  let numeroDaCasa = document.getElementById("ncasa").value;
  let cep = document.getElementById("cep").value;

    
  let cliente = {
    name: `${nome}`,
    email: `${email}`,
    cpf: `${cpf}`,
    telefone: `${telefone}`,
    cidade: `${cidade}`,
    endereco: `${endereco}`,
    ncasa: `${numeroDaCasa}`,
    cep: `${cep}`
    };

  let clienteJSON = JSON.stringify(cliente);
  localStorage.cliente = clienteJSON; //Escrita de JSON
 
};
//Comunicação Ajax com API e leitura de JSON
$('#cep').blur(function(){
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    $.get(url, function(data){
        console.log(data)
        $('#cidade').val(data.localidade);
        $('#endereco').val(data.logradouro);
    });

    
})