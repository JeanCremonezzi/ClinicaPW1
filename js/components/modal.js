import { getConsultas } from "../webservice/consultas.js";
import { genTableConsultas } from "./tableConsultas.js";

const genModalConsultas = (id, modal) => {

    getConsultas()
    .then((data) => {
        let filtered = data.filter((consulta) => {
            if (consulta.idPaciente == id) {
                return consulta;
            };
        });

        if (filtered.length > 0) {
            let table = genTableConsultas(filtered);
            modal.html(table);

        } else {
            modal.html("<p>Nenhuma consulta encontrada!</p>");
        };

    }).catch((err) => {
        alert(`Error status ${err.status} on get consultas`);
    });
};

export function genModal(role, id) {
    let modal = $("<div></div>");
    modal.attr({"class": "modal"});

    role == "consultas" ? genModalConsultas(id, modal) : alert();

    $("body").prepend(modal);
}