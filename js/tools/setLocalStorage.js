import { getPacientes } from "../api/pacientes.js";
import { getMedicos } from "../api/medicos.js";
import { getEspecialidades } from "../api/especialidades.js";
import { getConsultas } from "../api/consultas.js";

export function setAllData() {
    
	getEspecialidades()
		.done((data) => {
			localStorage.setItem("especialidades", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get especialidades");
		});

	getPacientes()
		.done((data) => {
			localStorage.setItem("pacientes", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get pacientes");
		});

	getMedicos()
		.done((data) => {
			localStorage.setItem("medicos", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get medicos");
		});

	getConsultas()
		.done((data) => {
			localStorage.setItem("consultas", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get consultas");
		});
}
