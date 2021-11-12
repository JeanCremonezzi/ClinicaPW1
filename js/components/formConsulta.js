import { postConsulta } from "../api/consultas.js";

import { setAllData } from "../tools/setLocalStorage.js";

export function formConsulta() {
	let form = $("<form></form>");
	form.attr({ id: "formConsulta" });
	form.attr({ class: "formAdd" });

	let header = $("<h1>Nova Consulta</h1>");
	form.append(header);

	let rowUsuarios = $("<div></div>");
	rowUsuarios.attr({ class: "input-row" });

	rowUsuarios.append(genColMedicos());
	rowUsuarios.append(genColPacientes());

	let rowData = $("<div></div>");
	rowData.attr({ class: "input-row" });

	rowData.append(genColDia());
	rowData.append(genColHorario());

    let button = $("<button>Enviar</button>");
    button.attr({"disabled": "disabled"});
    button.attr({"id": "btnEnviarConsultas"});

    button.click((event) => {
        event.preventDefault();

		const dados = {
			"idPaciente": $("#selectPacientes option:selected").val(),
			"idMedico": $("#selectMedicos option:selected").val(),
			"data": `${$("#inputDia").val()} ${$("#inputHorario").val()}`
		};

		postConsulta(dados)
		.done((resp) => {

			if (resp.status == "Erro") {
				alert("Ocorreu um erro ao cadastrar consulta. Tente novamente");

			} else {
				alert("Consulta cadastrada");
				setAllData();
				$(".novaConsulta").trigger("click");
			};

		}).catch(() => {
			alert("Ocorreu um erro ao cadastrar consulta. Tente novamente");
		});
    });

	form.append(rowUsuarios, rowData, button);
	return form;
}

function genColMedicos() {
	let div = $("<div></div>");
	div.attr({ "class": "input-col" });

	let label = $("<label>Médico</label>");
	label.attr({ "for": "selectMedicos" });

	let select = $("<select></select>");
	select.attr({ "id": "selectMedicos" });

    let defaultOption = $("<option>Selecionar</option>");
    defaultOption.attr({
        "value": "",
        "selected": "selected",
        "disabled": "disabled",
        "hidden": "hidden"
    });

    select.append(defaultOption);
    select.attr({"required": "required"});

	const medicos = JSON.parse(localStorage.getItem("medicos"));
	medicos.map((medico) => {
		let option = $(`<option>${medico.nome}</option>`);
		option.attr({ value: medico.id });

		select.append(option);
	});

	select.change(() => {
		checkFields();
	});

	div.append(label, select);
	return div;
}

function genColPacientes() {
	let div = $("<div></div>");
	div.attr({ "class": "input-col" });

	let label = $("<label>Paciente</label>");
	label.attr({ "for": "selectPacientes" });

	let select = $("<select></select>");
	select.attr({ "id": "selectPacientes" });

    let defaultOption = $("<option>Selecionar</option>");
    defaultOption.attr({
        "value": "",
        "selected": "selected",
        "disabled": "disabled",
        "hidden": "hidden"
    });

    select.append(defaultOption);
    select.attr({"required": "required"});

	const pacientes = JSON.parse(localStorage.getItem("pacientes"));
	pacientes.map((paciente) => {
		let option = $(`<option>${paciente.nome}</option>`);
		option.attr({ value: paciente.id });

		select.append(option);

	});

	select.change(() => {
		checkFields();
	});

	div.append(label, select);

	return div;
}

function genColDia() {
	let div = $("<div></div>");
	div.attr({ "class": "input-col" });

	let label = $("<label>Data da consulta</label>");
	label.attr({ "for": "inputDia" });

    let input = $("<input>");
    const hoje = new Date().toISOString().split("T")[0];
    input.attr({
        "type": "date",
        "id": "inputDia",
        "value": hoje,
        "min": hoje,
        "required": "required"
    });

    div.append(label, input);

	return div;
}

function genColHorario() {
	let div = $("<div></div>");
	div.attr({ "class": "input-col" });

	let label = $("<label>Horário da consulta</label>");
	label.attr({ "for": "inputHorario" });

    let input = $("<input>");
    const hoje = new Date();

	let hora = `${hoje.getHours()}:${(hoje.getMinutes()).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false		
	})}`;

    input.attr({
        "type": "time",
        "id": "inputHorario",
        "value": hora,
        "required": "required"
    });

    div.append(label, input);

	return div;
}

function checkFields() {

	if ($("#selectMedicos option:selected").val() != "" && $("#selectPacientes option:selected").val() != "") {
		$("#btnEnviarConsultas")
        .addClass("btnEnabled")
		.prop("disabled", false);

	} else {
        $("#btnEnviarConsultas")
        .removeClass("btnEnabled")
        .prop("disabled", true);
    }
}