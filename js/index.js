// # para id 
// . para classe
var pacientes = document.querySelectorAll(".paciente");

adicionarIMCPacientes(pacientes);

var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", AdicionarNovoPaciente);

function adicionarIMCPacientes(pacientes)
{
	var imc = 0.00;
	var erro = "";

	for(var i = 0; i < pacientes.length; i++)
	{
		var peso = pacientes[i].querySelector(".info-peso").textContent;
		var altura = pacientes[i].querySelector(".info-altura").textContent;
		var tdIMC = pacientes[i].querySelector(".info-imc");

		if (!pesoValido(peso) || !alturaValida(altura))
		{
			erro = "Dados Inválidos";
			
			tdIMC.textContent = erro;
			/pacientes[i].style.backgroundColor = "lightcoral";/
			pacientes[i].classList.add("paciente-invalido");
		}
		else
		{
			imc = calcularIMC(peso, altura);
			tdIMC.textContent = imc;	
		}
	}
}

function pesoValido(peso)
{
	return peso > 0 && peso < 300;
}

function alturaValida(altura)
{
	return altura > 0.4 && altura < 4.0;
}

function calcularIMC(peso, altura)
{
	var imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function AdicionarNovoPaciente(event) 
{
	event.preventDefault();
	
	var pacientesTable = document.querySelector("#tabela-pacientes");
	var form = document.querySelector("#form-adiciona");

	var paciente = extrairDadosPaciente(form);
	var novoPacienteTR = criarPacienteTR(paciente);

	pacientesTable.appendChild(novoPacienteTR);
}

function extrairDadosPaciente(form)
{
	var paciente = 
	{
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calcularIMC(form.peso.value, form.altura.value)
	};

	return paciente;
}

function criarPacienteTR(paciente)
{
	/ criando a nova Table Row (TR) e Table Datas (TDs) /
	var pacienteTR = document.createElement("tr");
	var nomeTD = document.createElement("td");
	var pesoTD = document.createElement("td");
	var alturaTD = document.createElement("td");
	var gorduraTD = document.createElement("td");
	var imcTD = document.createElement("td");

	/ adicionando as respectivas classes à TR e aos TDs /
	pacienteTR.classList.add("paciente");
	nomeTD.classList.add("info-nome");
	pesoTD.classList.add("info-peso");
	alturaTD.classList.add("info-altura");
	gorduraTD.classList.add("info-gordura");
	imcTD.classList.add("info-imc");

	/ adicionando os valores do objeto paciente aos seus respectivos TDs /
	nomeTD.textContent = paciente.nome;
	pesoTD.textContent = paciente.peso;
	alturaTD.textContent = paciente.altura;
	gorduraTD.textContent = paciente.gordura;
	imcTD.textContent = paciente.imc;

	/ anexando os TDs à TR /
	pacienteTR.appendChild(nomeTD);
	pacienteTR.appendChild(pesoTD);
	pacienteTR.appendChild(alturaTD);
	pacienteTR.appendChild(gorduraTD);
	pacienteTR.appendChild(imcTD);

	return pacienteTR;
}