// # para id 
// . para classe
var titulo = document.querySelector("#titulo-principal");

titulo.textContent = "Aparecida Nutrição";

var tabelaPacientes = document.querySelector("#tabela-pacientes");
var pacienteUm = tabelaPacientes.querySelector("#paciente-um");
var massa = pacienteUm.querySelector(".info-peso").textContent;
var altura = pacienteUm.querySelector(".info-altura").textContent;
var tdIMC = pacienteUm.querySelector(".info-imc");
var imc;

if (massa <= 0 || massa >= 300)
{
	imc = "Peso inválido";
	
	if (altura <= 0.4 || altura >= 4)
	{	
		imc += " | Altura inválida";
	}
} else
{
	imc = massa / (altura * altura);
}

	tdIMC.textContent = imc;	

