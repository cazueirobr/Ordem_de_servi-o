//Variaveis para definir o tempo de sessão
var timer = new Date; //Definindo um ponteiro de data
var open_Session = timer.getMinutes(); //Pega o minuto atual
var time_Up = 2 //tempo em minutos da sessão


function restart_session(){
    aux = new Date
    open_Session = aux.getMinutes()
}



//Função para calcular quando a sessão ira expirar
let session_time = function(start, end){ //Função anonima com parametro
    end = parseInt(end) //Convertendo o parametro end para inteiro
    //Ifs e elses para caso o tempo de sessão definida seja alterado, tambem terá um retorno para utilizar em outra função anonima
    if(start + end > 60){
        return start + end - 60;
    }
    else{
        return start + end;
    }
    
    

};

//Função para redirecionar o usuario apos expirar a sessão
let time_up = function(){ //Função anonima sem parametro
    aux = new Date();
    console.log(open_Session)
    if(aux.getMinutes() == session_time(open_Session, time_Up)){
        window.location.href = "index.html";

    }

}
//Função para renovar a sessão a cada click do usuario
window.onload = function(){

   
    document.onclick = function(){  //tratador de evento no modo tradicional
        restart_session()
        console.log(open_Session)

    }
}

session_state = setInterval(time_up,60000) //Executando verificação de tempo a cada 60 segundos


