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


