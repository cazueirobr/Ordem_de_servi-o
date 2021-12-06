'use strict';
//Função autoexecutavel
(function() {

let tickets = [
  [1,'Limpar escritorio', 'Mclancheinfeliz', '12341234', 'guarapuava', 'Limpeza'],
  [2,'Reprogramar seu Javascript interior 🥶🥶','Coach quantico','43214321','guarapuava','Psicologia'],
  [11, 'organize Evento', 'Mega Freeway', '94949434', 'pinhão' ,'Festas'],
  [7, 'Apontamento de horas 😎😎', 'Rátinhoooooo', '93212345', 'maceio', 'Reunião'],
  [4, 'Pagar agiota 🥵🥵', 'Banco', '21335678', 'curitiba','Financias'],
  [23, 'Jogar 50 no tigre', 'Jogo do bixo', '98765432', 'floarianopolis', 'Cassino']];

    //Função para ordenar os tickets por ID / 1 Manipulação de array
tickets.sort(function(line1,line2) {
  return line1[0] - line2[0];  
});

tickets.forEach(function(e, i) {
  document.write('<tr>' + 
    "<td><a href=''><i class='fa fa-edit'></i></a> :: <a href=''>" + 
    "<i class='fa fa-wrench' aria-hidden='true'></i></a> :: <a href=''>" +
    `<i class='fa fa-gavel' aria-hidden='true' onclick='excluir(${i})'>` + 
    '</i></a></td>' +
    '<th></th>' +
    `<th>${e[0]}</th>` +
    `<td>${e[1]}</td>` + 
    `<td>${e[2]}</td>` + 
    `<td>${e[3]}</td>` + 
    `<td>${e[4]}</td>` + 
    `<td>${e[5]}</td>` + 
    '</tr>');
            
            });
    })();





