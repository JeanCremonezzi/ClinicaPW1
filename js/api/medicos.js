export function getMedicos() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/medicos.php",
		dataType: "json"
	});
};

export function postMedico(data) {
	return $.ajax({
		method: "POST",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/medicos.php",
		dataType: "json",
		data: data
	});
};