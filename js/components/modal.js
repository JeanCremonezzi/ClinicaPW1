import { genTableConsultas } from "./tableConsultas.js";

export function genModal(type, id) {
    let modal = $("<div></div>");
    modal.attr({"class": "modal"});

    let consultas = JSON.parse(localStorage.getItem("consultas"));
    let consultasFiltered = [];

    switch (type) {

        case "paciente":
            consultasFiltered = consultas.filter((consulta) => {
                if (consulta.idPaciente == id) {
                    return consulta;
                };
            });
            break;

        case "medico":
            consultasFiltered = consultas.filter((consulta) => {
                if (consulta.idMedico == id) {
                    return consulta;
                };
            });
            break;
        
        default:
            break;
    };

    if (consultasFiltered.length > 0) {
        modal.html(genTableConsultas(consultasFiltered));
    } else {
        modal.html("<p>Nenhuma consulta encontrada!</p>");
    }

    $("body").prepend(modal);
}