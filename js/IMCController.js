// # para id 
// . para classe
var pacientes = document.querySelectorAll(".paciente");

adicionarIMCPacientes(pacientes);

var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");








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
	return (peso > 0 && peso < 300);
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
