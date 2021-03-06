export function getConsultas() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/consultas.php",
		dataType: "json"
	});
};

export function postConsulta(data) {
	return $.ajax({
		method: "POST",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/consultas.php",
		dataType: "json",
		data: data
	});
};

export function deleteConsulta(id) {
	return $.ajax({
		method: "DELETE",
		url: `https://tiagoifsp.ddns.net/clinicaMedica/consultas.php?id=${id}`
	});
};