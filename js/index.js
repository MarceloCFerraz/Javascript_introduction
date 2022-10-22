// # para id 
// . para classe
var titulo = document.querySelector("#titulo-principal");

titulo.textContent = "Aparecida Nutrição";

var tabelaPacientes = document.querySelector("#tabela-pacientes");
var pacienteUm = tabelaPacientes.querySelector("#paciente-um");
var massa = pacienteUm.querySelector(".info-peso").textContent;
var altura = pacienteUm.querySelector(".info-altura").textContent;
var tdIMC = pacienteUm.querySelector(".info-imc");
var imc = massa / (altura * altura);

tdIMC.textContent = imc;

console.log(imc);