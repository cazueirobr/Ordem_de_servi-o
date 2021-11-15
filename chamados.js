/*
A variavel "tickets" são os chamados cadastrados
Notem que os IDS de chamados estão fora de ordem: 1, 2, 11, 7, 4, 23
E o nome das cidades etão com a primeira letra em minusculo, porem, mais para frente terá manipulação de string para corrigir este problema
*/
tickets = [[1,"Limpar escritorio", "Mclancheinfeliz", "12341234", "guarapuava", "Limpeza"],
[2,"Reprogramar seu Javascript interior 🥶🥶","Coach quantico","43214321","guarapuava","Psicologia"],
[11, "Organizar Evento", "Mega Freeway", "94949434", "pinhão" ,"Festas"],
[7, "Apontamento de horas 😎😎", "Rátinhoooooo", "93212345", "maceio", "Reunião"],
[4, "Pagar agiota 🥵🥵", "Banco", "21335678", "curitiba","Financias"],
[23, "Jogar 50 no tigre", "Jogo do bixo", "98765432", "floarianopolis", "Cassino"]]



//Função para percorrer o array de tickets e ir organizando na tabela de tickets
function call_tickets(){

    tickets.forEach(function(e, i){ //Usar laço de repetição (for..in ou for..of ou forEach)
        /*Neste document.write temos: 
        String Template
        3 manipulações de String
        */
        document.write("<tr>",
        `<td><a href=''><i class='fa fa-edit'></i></a> :: <a href=''><i class='fa fa-wrench' aria-hidden='true'></i></a> :: <a href=''><i class='fa fa-gavel' aria-hidden='true' onclick="excluir(${i})"></i></a></td>`,
        `<th></th>`,
        `<th>${e[0]}</th>`,
        `<td>${e[1]}</td>`,
        `<td>${e[2]}</td>`,
        `<td>${e[3]}</td>`,
        `<td>${e[4].charAt(0).toUpperCase() + e[4].slice(1)}</td>`,
        `<td>${e[5]}</td>`,
        "</tr>")
        
        })

    

}

//Função para deletar o chamado selecionado no "martelinho" 
/*OBS: Ele modifica a lista e deleta o chamado selecionado, porem, ao atualizar a pagina ele volta para a atribuição de tickets normais no começo
Mais para frente com o conteudo de webStorage pretendo corrigir este problema
*/
function excluir(deletar) {
            if(confirm("Deseja deletar o chamado de ID: " + tickets[deletar][0])){ //confirm
            tickets.splice(deletar, 1); //1 manipulação de array

            }
}

addEventListener("keypress", function(e){ //função addEventListener

    if(e.key == "Enter"){

        

        procurar = prompt("Digite o ID do chamado que você deseja procurar") //prompt
        tickets.forEach(function(e, i){ //Usar laço de repetição (for..in ou for..of ou forEach)
            /*Neste document.write temos: 
            String Template
            3 manipulações de String
            */
           if(e[0] == procurar){
            document.write("<tr>",
            `<td><a href=''><i class='fa fa-edit'></i></a> :: <a href=''><i class='fa fa-wrench' aria-hidden='true'></i></a> :: <a href=''><i class='fa fa-gavel' aria-hidden='true' onclick="excluir(${i})"></i></a></td>`,
            `<th></th>`,
            `<th>${e[0]}</th>`,
            `<td>${e[1]}</td>`,
            `<td>${e[2]}</td>`,
            `<td>${e[3]}</td>`,
            `<td>${e[4].charAt(0).toUpperCase() + e[4].slice(1)}</td>`,
            `<td>${e[5]}</td>`,
            "</tr>")
           }
            })
       
    }  

})

