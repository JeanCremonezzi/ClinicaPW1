export function getConsultas() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/consultas.php",
		dataType: "json"
	});
};