

// # para id 
// . para classe
var titulo = document.querySelector("#titulo-principal");

titulo.textContent = "Aparecida Nutrição";

var pacientes = document.querySelectorAll(".paciente");
var imc = 0.00;
var erro = "";

for(var i = 0; i < pacientes.length; i++)
{
	var peso = pacientes[i].querySelector(".info-peso").textContent;
	var altura = pacientes[i].querySelector(".info-altura").textContent;
	var tdIMC = pacientes[i].querySelector(".info-imc");

	if (peso <= 0 || peso >= 300 || altura <= 0.4 || altura >= 4.0)
	{
		erro = "Dados Inválidos";
		
		tdIMC.textContent = erro;
		/pacientes[i].style.backgroundColor = "lightcoral";/
		pacientes[i].classList.add("paciente-invalido");
	}
	else
	{
		imc = peso / (altura * altura);
		imc.toFixed(2)
		tdIMC.textContent = imc.toFixed(2);	
	}
}

var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", AdicionarNovoPaciente);

function AdicionarNovoPaciente(event) {
	event.preventDefault();
	
	var pacientes = document.querySelector("#tabela-pacientes");
	var form = document.querySelector("#form-adiciona");
	var pacienteTR = document.createElement("tr");

	var nomeTD = document.createElement("td");
	var pesoTD = document.createElement("td");
	var alturaTD = document.createElement("td");
	var gorduraTD = document.createElement("td");
	var imcTD = document.createElement("td");

	var nome = form.nome.value;
	nomeTD.textContent = nome;
	var peso = form.peso.value;
	pesoTD.textContent = peso;
	var altura = form.altura.value;
	alturaTD.textContent = altura;
	var gordura = form.gordura.value;
	gorduraTD.textContent = gordura;
	var imc = peso / (altura * altura);
	imcTD.textContent = imc.toFixed(2);

	pacienteTR.appendChild(nomeTD);
	pacienteTR.appendChild(pesoTD);
	pacienteTR.appendChild(alturaTD);
	pacienteTR.appendChild(gorduraTD);
	pacienteTR.appendChild(imcTD);

	pacientes.appendChild(pacienteTR);
}