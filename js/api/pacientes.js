/* get pacientes */
export function getPacientes() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/pacientes.php",
		dataType: "json"
	});
};