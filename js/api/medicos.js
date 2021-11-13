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

export function putMedico(data) {
	return $.ajax({
		method: "PUT",
		url: `https://tiagoifsp.ddns.net/clinicaMedica/medicos.php`,
		dataType: "json",
		data: data
	});
};

export function deleteMedico(id) {
	return $.ajax({
		method: "DELETE",
		url: `https://tiagoifsp.ddns.net/clinicaMedica/medicos.php?id=${id}`
	});
};