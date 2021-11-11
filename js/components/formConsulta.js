export function formConsulta() {
	let form = $("<form></form>");
	form.attr({ id: "formConsulta" });

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

    button.click((event) => {
        event.preventDefault();
        alert("Enviar");
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
    const horario = new Date().toISOString().split("T")[1].slice(0, 5);
    input.attr({
        "type": "time",
        "id": "inputHorario",
        "value": horario,
        "required": "required"
    });

    div.append(label, input);

	return div;
}