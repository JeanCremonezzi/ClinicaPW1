import { putMedico } from "../api/medicos.js";

import { setAllData } from "../tools/setLocalStorage.js";

export function actionsMedico(id) {

    let medico = JSON.parse(localStorage.getItem("medicos"))
    .find(med => med.id == id);

    let form = $("<form></form>");
	form.attr({ id: "formEditMedico" });
	form.attr({ class: "form" });

	let header = $("<h1>Editar Médico</h1>");
	form.append(header);

	let row = $("<div></div>");
	row.attr({ class: "input-row" });

    row.append(genColName(medico));
    row.append(genColEspec(medico));

    let buttonEdit = $("<button>Enviar</button>");
    buttonEdit.attr({"disabled": "disabled"});
    buttonEdit.attr({"id": "btnEditarMedico"});

    buttonEdit.click((event) => {
        event.preventDefault();

        const dados = {
            "id": id,
			"nome": $("#inputNome").val(),
			"idEspecialidade": `${$("#selectEspec option:selected").val()}`
		};

        putMedico(dados)
		.done((resp) => {

			if (resp.status == "Erro") {
				alert("Ocorreu um erro ao editar médico. Tente novamente");

			} else {
                setAllData().then(() => {
				    alert("Médico editado");
				    $(".verMedicos").trigger("click");
                });
			};

		}).catch(() => {
			alert("Ocorreu um erro ao editar médico. Tente novamente");
		});
    });

    let buttonDelete = $("<button>Deletar</button>");
    buttonDelete.attr({"class": "btnDeleteUser"});

    buttonDelete.click((event) => {
        event.preventDefault();

        alert("DELETAR MÉDICO");
    });

	form.append(row, buttonEdit, buttonDelete);
    return form;
}

function genColName(medico) {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Nome</label>");
	label.attr({ "for": "inputNome" });

    let input = $("<input>");
	input.attr({ 
        "value": medico.nome,
        "id": "inputNome",
        "required": "required"
    });

	input.keyup(() => {
		checkFields(medico);
	});

    div.append(label, input);

    return div;
}

function genColEspec(medico) {

    let div = $("<div></div>");
    div.attr({"class": "input-col"});

    let label = $("<label>Especialidade</label>");
	label.attr({ "for": "selectEspec" });

	let select = $("<select></select>");
    select.attr({
        "id": "selectEspec",
        "required": "required"
    });

	const especialidades = JSON.parse(localStorage.getItem("especialidades"));
	especialidades.map((especialidade) => {
		let option = $(`<option>${especialidade.nome}</option>`);
		option.attr({ value: especialidade.id });

        if (especialidade.id == medico.idEspecialidade) {
            option.attr({"selected": "selected"});
        }

		select.append(option);

	});

	select.change(() => {
		checkFields(medico);
	});

    div.append(label, select);

    return div;
}

function checkFields(medicoDados) {
	
    if ($("#selectEspec option:selected").val() != "" && $("#inputNome").val() != ""
        && ($("#selectEspec option:selected").val() != medicoDados.idEspecialidade || $("#inputNome").val() != medicoDados.nome)) {
        $("#btnEditarMedico")
        .addClass("btnEnabled")
        .prop("disabled", false);
        
    } else {
        $("#btnEditarMedico")
        .removeClass("btnEnabled")
        .prop("disabled", true);
    }
}