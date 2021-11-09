export function getEspecialidades() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/especialidades.php",
		dataType: "json"
	});
};