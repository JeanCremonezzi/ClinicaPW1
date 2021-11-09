export function getMedicos() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/medicos.php",
		dataType: "json"
	});
};