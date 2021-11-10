import { genTablePacientes,populateTablePacientes } from "./components/tablePacientes.js";
import { genTableMedicos,populateTableMedicos} from "./components/tableMedicos.js";

import { getPacientes } from "./api/pacientes.js";
import { getMedicos } from "./api/medicos.js";
import { getEspecialidades } from "./api/especialidades.js";

$(document).ready(() => {

	/** Armazena especialidades no localStorage */
	getEspecialidades()
		.then((data) => {
			localStorage.setItem("especialidades", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get especialidades");
		});

	/** Gera tabela de pacientes ao clicar */
	$(".verPacientes").click((event) => {
		event.preventDefault();

		$("main").html("");

		getPacientes()
			.then((data) => {
				$("main").append(genTablePacientes());
				populateTablePacientes(data);
				localStorage.setItem("pacientes", JSON.stringify(data));
			})
			.catch(() => {
				alert("Error on get pacientes");
			});
	});

	/** Gera tabela de médicos ao clicar */
	$(".verMedicos").click((event) => {
		event.preventDefault();

		$("main").html("");

		getMedicos()
			.then((data) => {
				$("main").append(genTableMedicos());
				populateTableMedicos(data);
				localStorage.setItem("medicos", JSON.stringify(data));
			})
			.catch(() => {
				alert("Error on get medicos");
			});
	});
});
