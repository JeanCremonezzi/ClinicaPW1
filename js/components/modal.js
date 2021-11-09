import { getConsultas } from "../api/consultas.js";

export function genModal(type, id) {
    let modal = $("<div></div>");
    modal.attr({"class": "modal"});

    getConsultas()
    .then((data) => {

        let consultas;

        switch (type) {

            case "paciente":
                consultas = data.filter((consulta) => {
                    if (consulta.idPaciente == id) {
                        return consulta;
                    };
                });
                break;

            case "medico":
                consultas = data.filter((consulta) => {
                    if (consulta.idMedico == id) {
                        return consulta;
                    };
                });
                break;
        
            default:
                break;
        };

        console.log(consultas);
    });

    modal.html("<p>Nenhuma consulta encontrada!</p>");

    $("body").prepend(modal);
}