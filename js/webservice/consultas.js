export function getConsultas(id) {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/consultas.php/",
		dataType: "json",
        success: (resp) => {
            return resp;
        },
        error: (err) => {
            return err;
        }
	});
};