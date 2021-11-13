import { getPacientes } from "../api/pacientes.js";
import { getMedicos } from "../api/medicos.js";
import { getEspecialidades } from "../api/especialidades.js";
import { getConsultas } from "../api/consultas.js";

export async function setAllData() {
	
	await getEspecialidades()
		.done((data) => {
			localStorage.setItem("especialidades", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get especialidades");
		});

	await getPacientes()
		.done((data) => {
			localStorage.setItem("pacientes", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get pacientes");
		});

	await getMedicos()
		.done((data) => {
			localStorage.setItem("medicos", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get medicos");
		});

	await getConsultas()
		.done((data) => {
			localStorage.setItem("consultas", JSON.stringify(data));
		})
		.catch(() => {
			alert("Error on get consultas");
		});
}
