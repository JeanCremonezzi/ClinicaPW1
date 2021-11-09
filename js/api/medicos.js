export function getMedicos() {
	return $.ajax({
		method: "GET",
		url: "https://tiagoifsp.ddns.net/clinicaMedica/medicos.php",
		dataType: "json",
        success: (resp) => {
            return resp;
        },
        error: (err) => {
            return err;
        }
	});
};