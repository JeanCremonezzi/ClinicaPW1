import { genTablePacientes } from "./components/tablePacientes.js";
import { genTableMedicos } from "./components/tableMedicos.js";

import { getPacientes } from "./api/pacientes.js";
import { getMedicos } from "./api/medicos.js";
import { getEspecialidades } from "./api/especialidades.js";
import { getConsultas } from "./api/consultas.js";

$(document).ready(() => {

	/** Armazena especialidades no localStorage */
	getEspecialidades()
		.done((data) => {
			localStorage.setItem("especialidades", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get especialidades");
		});

	getPacientes()
		.done((data) => {
			localStorage.setItem("pacientes", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get pacientes");
		});

	getMedicos()
		.done((data) => {
			localStorage.setItem("medicos", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get medicos");
		});

	getConsultas()
		.done((data) => {
			localStorage.setItem("consultas", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get consultas");
		});

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
