//Variaveis para definir o tempo de sessão
let timer = new Date; //Definindo um ponteiro de data
var open_Session = timer.getMinutes(); //Pega o minuto atual
var time_Up = 10 //tempo em minutos da sessão


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
    if(aux.getMinutes() == session_time(open_Session, time_Up)){
        clearInterval(session_state);
        window.location.href = "index.html";

    }

}

session_state = setInterval(time_up,5000) //Executando verificação de tempo a cada 5 segundos
