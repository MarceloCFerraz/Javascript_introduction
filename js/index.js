// # para id 
// . para classe
var titulo = document.querySelector("#titulo-principal");

titulo.textContent = "Aparecida Nutrição";

var pacientes = document.querySelectorAll(".paciente");
var imc;
var erro;

for(var i = 0, length1 = pacientes.length; i < length1; i++)
{
	var peso = pacientes[i].querySelector(".info-peso").textContent;
	var altura = pacientes[i].querySelector(".info-altura").textContent;
	var tdIMC = pacientes[i].querySelector(".info-imc");

	if (peso <= 0 || peso >= 300)
	{
		erro = "Peso inválido";
		
		if (altura <= 0.4 || altura >= 4)
		{	
			erro += " | Altura inválida";
		}

		tdIMC.textContent = erro;
	} else
	{
		imc = peso / (altura * altura);
		imc.toFixed(2)
		tdIMC.textContent = imc.toFixed(2);	
	}
}


