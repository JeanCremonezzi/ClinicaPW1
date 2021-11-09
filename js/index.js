import {genTablePacientes, populateTablePacientes} from "./components/tablePacientes.js";
import {genTableMedicos, populateTableMedicos} from "./components/tableMedicos.js";

import {getPacientes} from "./api/pacientes.js";
import {getMedicos} from "./api/medicos.js";
import {getEspecialidades} from "./api/especialidades.js";

$(document).ready(() => {

	getEspecialidades()
	.then((data) => {
		localStorage.setItem("especialidades", JSON.stringify(data));
	})
	.catch(() => {
		alert("Error on get especialidades");
	});

	$(".verPacientes").click((event) => {
		event.preventDefault();

		$("main").html("");

		getPacientes()
		.then((data) => {
			$("main").append(genTablePacientes);
			populateTablePacientes(data);
		})
		.catch(() => {
			alert("Error on get pacientes");
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
		.catch(() => {
			alert("Error on get medicos");
		});

	})
});