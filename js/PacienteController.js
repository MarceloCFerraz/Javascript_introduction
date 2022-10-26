btnAdicionarPaciente.addEventListener("click", AdicionarNovoPaciente);

ativarBotaoDelete(document.querySelector("#tabela-pacientes"));










function ativarBotaoDelete (tabela) {
	tabela.addEventListener("click", function(event)
	{
		var alvo = event.target;
		if (alvo.classList == "btn-deletar")
		{
			// o botão de deletar foi clicado

			var paciente = alvo.closest(".paciente");
			paciente.classList.add(".fadeOut");
			
			setTimeout(function()
			{
				paciente.remove();
			}, 500);
		}
	});
}

function deletarPaciente() {
	console.log("Estou sendo executado")
}

function AdicionarNovoPaciente(event) 
{
	event.preventDefault();
		
	var pacientesTable = document.querySelector("#tabela-pacientes");

	var form = document.querySelector("#form-adiciona");

	var paciente = extrairPacienteDoForm(form);
	
	if (paciente == null)
	{
		alert("ALGO DADO ESTÁ INCORRETO. Por favor, corrija os campos em vemelho e tente novamente!");
	}
	else
	{
		var novoPacienteTR = criarTrDePaciente(paciente); 

		pacientesTable.appendChild(novoPacienteTR);

		resetForm(form);
	}
}


function extrairPacienteDoForm(form)
{
	var paciente = 
	{
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calcularIMC(form.peso.value, form.altura.value)
	};

	var retorno = validarPaciente(paciente, form);

	return retorno;
}

function validarPaciente (paciente) {
	var retorno = paciente;

	if (!nomeValido(paciente.nome))
	{
		retorno = null;
		highlightErrors("nome", form);
	}

	if (!pesoValido(paciente.peso) || paciente.peso.length == 0)
	{
		retorno = null;
		highlightErrors("peso", form);
	}

	if (!alturaValida(paciente.altura) || paciente.altura.length == 0)
	{
		retorno = null;
		highlightErrors("altura", form);
	}

	if (paciente.gordura.length == 0)
	{
		retorno = null;
		highlightErrors("gordura", form);
	}

	return retorno;
}

function nomeValido(nome)
{
	return nome.length > 0;
}

function highlightErrors(campo, form)
{
	form.querySelector("#" + campo).style.color = "red";
}

function criarTrDePaciente(paciente)
{
	// criando a nova Table Row (TR) e adicionando classe "paciente" ao html
	var pacienteTR = document.createElement("tr");
	pacienteTR.classList.add("paciente");

	// criando Table Datas (TDs) e adicionando suas respectivas classes e dados
	var nomeTD = criarTdDePaciente(paciente.nome, "info-nome");
	var pesoTD = criarTdDePaciente(paciente.peso, "info-peso");
	var alturaTD = criarTdDePaciente(paciente.altura, "info-altura");
	var gorduraTD = criarTdDePaciente(paciente.gordura, "info-gordura");
	var imcTD = criarTdDePaciente(paciente.imc, "info-imc");

	// Criando botão de deleção
	var btnDeletar = document.createElement("button");
	btnDeletar.classList.add("btn-deletar");
	btnDeletar.textContent = "X";
	btnDeletar.onclick = deletarPaciente;

	// Criando TD para o botão delete
	var btnTD = document.createElement("td");
	btnTD.classList.add("info-deletar");
	btnTD.appendChild(btnDeletar);

	// anexando os TDs à TR
	pacienteTR.appendChild(nomeTD);
	pacienteTR.appendChild(pesoTD);
	pacienteTR.appendChild(alturaTD);
	pacienteTR.appendChild(gorduraTD);
	pacienteTR.appendChild(imcTD);
	pacienteTR.appendChild(btnTD);

	return pacienteTR;
}

function criarTdDePaciente (dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td
}

function resetForm(form)
{
	form.reset();
	form.querySelector("#nome").style.color = "black";
	form.querySelector("#altura").style.color = "black";
	form.querySelector("#peso").style.color = "black";
	form.querySelector("#gordura").style.color = "black";
}