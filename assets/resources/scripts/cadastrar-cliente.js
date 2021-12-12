
function jsonCreator(){
    let nome = $('#nome').val();
    email = $(".form-control")[1].value;
    cpf = $('input')[2].value;
    telefone = document.getElementById("telefone").value;
    cidade = document.getElementById("cidade").value;
    endereco = document.getElementById("endereco").value;
    numeroDaCasa = document.getElementById("ncasa").value;
    cep = document.getElementById("cep").value;
    alert(cpf);

    let cliente = {
        name: `${nome}`,
        email: `${email}`,
        cpf: `${cpf}`,
        telefone: `${telefone}`
    };

    lista = [];
    valorStorage = localStorage.getItem('osClientes')
    lista.push(JSON.parse(valorStorage))
    alert(lista)
    lista.push(cliente)
    alert(lista)
    listaJSON = JSON.stringify(lista)
    localStorage.setItem('osClientes', listaJSON);
    alert(JSON.parse(lista));

};