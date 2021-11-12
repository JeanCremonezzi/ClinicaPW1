import { postPaciente } from "../api/pacientes.js";

import { setAllData } from "../tools/setLocalStorage.js";

export function formPaciente() {
    let form = $("<form></form>");
	form.attr({ id: "formPaciente" });
	form.attr({ class: "formAdd" });

	let header = $("<h1>Novo Paciente</h1>");
	form.append(header);

	let row = $("<div></div>");
	row.attr({ class: "input-row" });

    row.append(genColName());
    row.append(genColNasc());

    let button = $("<button>Enviar</button>");
    button.attr({"disabled": "disabled"});
    button.attr({"class": "btnEnviarPaciente"});

    button.click((event) => {
        event.preventDefault();

        const dados = {
			"nome": $("#inputNome").val(),
			"dataNascimento": `${$("#inputNasc").val()}`
		};

        postPaciente(dados)
		.done((resp) => {
			
			if (resp.status == "Erro") {
				alert("Ocorreu um erro ao cadastrar paciente. Tente novamente");

			} else {
				alert("Paciente cadastrado");
				setAllData();
				$(".addPacientes").trigger("click");
			};

		}).catch(() => {
			alert("Ocorreu um erro ao cadastrar paciente. Tente novamente");
		});
    });

	form.append(row, button);
    return form;
}

function genColName() {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Nome</label>");
	label.attr({ "for": "inputNome" });

    let input = $("<input>");
	input.attr({ 
        "id": "inputNome", 
        "required": "required"
    });

	input.keyup(() => {
		checkFields();
	});

    div.append(label, input);

    return div;
}

function genColNasc() {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Nascimento</label>");
	label.attr({ "for": "inputNasc" });

    let input = $("<input>");
    const hoje = new Date().toISOString().split("T")[0];
    input.attr({
        "type": "date",
        "id": "inputNasc",
        "value": hoje,
        "max": hoje,
        "required": "required"
    });

	input.change(() => {
		checkFields();
	});

    div.append(label, input);

    return div;
}

function checkFields() {

	if ($("#inputNome").val() != "" && $("#inputNasc").val() != "") {
        $(".btnEnviarPaciente")
        .addClass("btnEnabled")
        .prop("disabled", false);
        
    } else {
        $(".btnEnviarPaciente")
        .removeClass("btnEnabled")
        .prop("disabled", true);
    }
}