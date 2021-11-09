import {genTablePacientes, populateTablePacientes} from "./components/tablePacientes.js";
import {genTableMedicos, populateTableMedicos} from "./components/tableMedicos.js";

import {getPacientes} from "./api/pacientes.js";
import {getMedicos} from "./api/medicos.js";

$(document).ready(() => {
	$(".verPacientes").click((event) => {
		event.preventDefault();

		$("main").html("");

		getPacientes()
		.then((data) => {
			$("main").append(genTablePacientes);
			populateTablePacientes(data);
		})
		.catch((err) => {
			alert(`Error status ${err.status} on get pacientes`);
		});
	
	});

	$(".verMedicos").click((event) => {
		event.preventDefault();

		$("main").html("");

		getMedicos()
		.then((data) => {
			$("main").append(genTableMedicos);
			populateTableMedicos(data);
		})
		.catch((err) => {
			alert(`Error status ${err.status} on get medicos`);
		});

	})
});