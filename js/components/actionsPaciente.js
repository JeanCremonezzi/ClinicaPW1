//import { setAllData } from "../tools/setLocalStorage.js";

export function actionsPaciente(id) {

    let paciente = JSON.parse(localStorage.getItem("pacientes"))
    .find(paci => paci.id == id);

    let form = $("<form></form>");
	form.attr({ id: "formPaciente" });
	form.attr({ class: "form" });

	let header = $("<h1>Novo Paciente</h1>");
	form.append(header);

	let row = $("<div></div>");
	row.attr({ class: "input-row" });

    row.append(genColName(paciente));
    row.append(genColNasc(paciente));

    let buttonEdit = $("<button>Editar</button>");
    buttonEdit.attr({"disabled": "disabled"});
    buttonEdit.attr({"id": "btnEnviarPaciente"});

    buttonEdit.click((event) => {
        event.preventDefault();

        const dados = {
			"nome": $("#inputNome").val(),
			"dataNascimento": `${$("#inputNasc").val()}`
		};

        console.log(dados);
    });

    let buttonDelete = $("<button>Deletar</button>");
    buttonDelete.attr({"class": "btnDeleteUser"});

    buttonDelete.click((event) => {
        event.preventDefault();

        alert("DELETAR PACIENTE");
    });

	form.append(row, buttonEdit, buttonDelete);
    return form;
}

function genColName(paciente) {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Nome</label>");
	label.attr({ "for": "inputNome" });

    let input = $("<input>");
	input.attr({ 
        "value": paciente.nome,
        "id": "inputNome", 
        "required": "required"
    });

	input.keyup(() => {
		checkFields(paciente);
	});

    div.append(label, input);

    return div;
}

function genColNasc(paciente) {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Nascimento</label>");
	label.attr({ "for": "inputNasc" });

    let input = $("<input>");
    const hoje = new Date().toISOString().split("T")[0];
    input.attr({
        "type": "date",
        "id": "inputNasc",
        "value": paciente.dataNascimento,
        "max": hoje,
        "required": "required"
    });

	input.change(() => {
		checkFields(paciente);
	});

    div.append(label, input);

    return div;
}

function checkFields(pacienteDados) {

	if ($("#inputNome").val() != "" && $("#inputNasc").val() != "" 
        && ($("#inputNome").val() != pacienteDados.nome || $("#inputNasc").val() != pacienteDados.dataNascimento)) {
        $("#btnEnviarPaciente")
        .addClass("btnEnabled")
        .prop("disabled", false);
        
    } else {
        $("#btnEnviarPaciente")
        .removeClass("btnEnabled")
        .prop("disabled", true);
    }
}