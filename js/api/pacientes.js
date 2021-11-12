export function getPacientes() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/pacientes.php",
		dataType: "json"
	});
};

export function postPaciente(data) {
	return $.ajax({
		method: "POST",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/pacientes.php",
		dataType: "json",
		data: data
	});
};