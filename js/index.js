import { genTablePacientes } from "./components/tablePacientes.js";
import { genTableMedicos } from "./components/tableMedicos.js";
import { formConsulta } from "./components/formConsulta.js";
import { formPaciente } from "./components/formPaciente.js";
import { formMedico } from "./components/formMedico.js";

import { setAllData } from "./tools/setLocalStorage.js";

$(document).ready(() => {

	setAllData().then(() => {
		
		/** Gera tabela de pacientes ao clicar */
		$(".verPacientes").click(() => {
			$("main").html("");
			$("main").append(genTablePacientes(JSON.parse(localStorage.getItem("pacientes"))));
		});

		/** Gera tabela de médicos ao clicar */
		$(".verMedicos").click(() => {
			$("main").html("");
			$("main").append(genTableMedicos(JSON.parse(localStorage.getItem("medicos"))));
		});

		/** Exibe formulário para inserir nova consulta */
		$(".novaConsulta").click(() => {
			$("main").html("");
			$("main").append(formConsulta());
		});

		/** Exibe formulário para inserir novo paciente */
		$(".addPacientes").click(() => {
			$("main").html("");
			$("main").append(formPaciente());
		});

		/** Exibe formulário para inserir novo médico */
		$(".addMedicos").click(() => {
			$("main").html("");
			$("main").append(formMedico());
		});
	});
});
