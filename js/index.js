import {genTablePacientes, populateTablePacientes} from "./components/tablePacientes.js";
import {getPacientes} from "./webservice/pacientes.js";

$(document).ready(() => {
	$("main").append(genTablePacientes);

	getPacientes()
	.then((data) => {
		populateTablePacientes(data);
	})
	.catch((err) => {
		alert(`Error status ${err.status} on get pacientes`);
	});
});