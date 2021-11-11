import { genTablePacientes } from "./components/tablePacientes.js";
import { genTableMedicos } from "./components/tableMedicos.js";

import { setAllData } from "./tools/setLocalStorage.js";

$(document).ready(() => {

	setAllData();

	/** Gera tabela de pacientes ao clicar */
	$(".verPacientes").click((event) => {
		event.preventDefault();

		$("main").html("");

		$("main").append(genTablePacientes(JSON.parse(localStorage.getItem("pacientes"))));
	});

	/** Gera tabela de médicos ao clicar */
	$(".verMedicos").click((event) => {
		event.preventDefault();

		$("main").html("");

		$("main").append(genTableMedicos(JSON.parse(localStorage.getItem("medicos"))));
	});
});
