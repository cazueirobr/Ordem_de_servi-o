//Função para criar uma chave de conexão, mais para frente pode ser utilizada para validar uma sessão
( function (){   console.log(Math.floor(Math.random() * (99999999 - 23323232)) + 23323232); } )() //Função auto executavel

//Logins e senhas definidas no sistema
system_user = "teste"
system_password = "teste"


   




//Função para abrir o cadeado, que será chamada ao passar o mouse na imagem ele está no elemento HTML (Inline)
function open_padlock(){
    var x = document.getElementById("cadeado").src; //GetelementbyID
    if(x = "imagens/Cadeado_fechado.jpg"){
        document.getElementById("cadeado").src = "Imagens/Cadeado_aberto.png";
    }

    
}

//Função para fechar o cadeado, que será chamada quando o mouse estiver fora da imagem
function close_padlock(){
    document.querySelector("img").src = "imagens/Cadeado_fechado.jpg"; //QuerySelector
}


//Função para capturar o login e senha e depois validala
function system_login(){
    var user = document.getElementsByName("username")[0].value //getElementsByName
    var password = document.getElementsByTagName("input")[1].value //getElementsBytagName
    //Comparando se os campos e o login definido "batem", retornara 1 para caso de certo e 0 para caso não seja semelhante
        if(user.toLowerCase() == system_user & password.toLowerCase() == system_password){ //2 manipulações de String
            return 1
        }
        else{
            return 0;
        }
        }


//Função para redirecionar o usuario caso o login esteja certo
function redirect(teste){ //Função recebendo outra função como argumento
    let contador = 0
    if(teste() == 1){ //Se o retorno da função for 1 o login está correto
        window.location.href = "telachamado.html";
    }
    else{
            setTimeout(() => {alert("Login errado, tente novamente")}, 1000) //Função aninhada, função usando arrowfunction, setTimeout e alert

        }
    }

//Caso o usuario esqueça de digitar a senha, avise ele
function passwordempty(){
    var password = document.getElementsByTagName("input")[1].value
    if(password == ''){

        alert("Você não digitou a senha!!")
    }

}
