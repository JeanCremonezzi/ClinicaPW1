import {genTablePacientes, populateTablePacientes} from "./components/tablePacientes.js";
import {getPacientes} from "./webservice/pacientes.js";

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
});