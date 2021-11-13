import { postMedico } from "../api/medicos.js";

import { setAllData } from "../tools/setLocalStorage.js";

export function formMedico() {
    let form = $("<form></form>");
	form.attr({ id: "formMedico" });
	form.attr({ class: "form" });

	let header = $("<h1>Novo Médico</h1>");
	form.append(header);

	let row = $("<div></div>");
	row.attr({ class: "input-row" });

    row.append(genColName());
    row.append(genColEspec());

    let button = $("<button>Enviar</button>");
    button.attr({"disabled": "disabled"});
    button.attr({"id": "btnEnviarMedico"});

    button.click((event) => {
        event.preventDefault();

        const dados = {
			"nome": $("#inputNome").val(),
			"idEspecialidade": `${$("#selectEspec option:selected").val()}`
		};

        postMedico(dados)
		.done((resp) => {

			if (resp.status == "Erro") {
				alert("Ocorreu um erro ao cadastrar médico. Tente novamente");

			} else {
				alert("Médico cadastrado");
				setAllData();
				$(".addMedico").trigger("click");
			};

		}).catch(() => {
			alert("Ocorreu um erro ao cadastrar médico. Tente novamente");
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

function genColEspec() {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Especialidade</label>");
	label.attr({ "for": "selectEspec" });

	let select = $("<select></select>");
    select.attr({
        "id": "selectEspec",
        "required": "required"
    });

    let defaultOption = $("<option>Selecionar</option>");
    defaultOption.attr({
        "value": "",
        "selected": "selected",
        "disabled": "disabled",
        "hidden": "hidden"
    });

    select.append(defaultOption);

	const especialidades = JSON.parse(localStorage.getItem("especialidades"));
	especialidades.map((especialidade) => {
		let option = $(`<option>${especialidade.nome}</option>`);
		option.attr({ value: especialidade.id });

		select.append(option);

	});

	select.change(() => {
		checkFields();
	});

    div.append(label, select);

    return div;
}

function checkFields() {

	if ($("#selectEspec option:selected").val() != "" && $("#inputNome").val() != "") {
        $("#btnEnviarMedico")
        .addClass("btnEnabled")
        .prop("disabled", false);
        
    } else {
        $("#btnEnviarMedico")
        .removeClass("btnEnabled")
        .prop("disabled", true);
    }
}