import { formatDate } from "../tools/formatDate.js";

export function genTableConsultas(data) {
    let table = $("<table></table>");
    table.attr({"id": "tableConsultas"});
    
    let head = $("<thead></thead>");
    let row = $("<tr></tr>");

    let celPaciente = $("<th>Paciente</th>");
    let celMedico = $("<th>Médico</th>");
    let celData = $("<th>Data</th>");
    let celCancelar = $("<th>Cancelar</th>");

    row.append(celPaciente, celMedico, celData, celCancelar);
    head.append(row);
    table.append(head);

    table.append(genBodyConsultas(data));

    return table;
}

function genBodyConsultas(data) {
    let bodyTabela = $("<tbody></tbody>");

    data.map((consulta) => {
        let row = $("<tr></tr>");

        let paciente = $(`<td>${consulta.idPaciente}</td>`);
        
        let medico = $(`<td>${consulta.idMedico}</td>`);

        let dataConsulta = $(`<td>${formatDate(consulta.data)}</td>`);

        let cancelar = $("<td></td>");
        let btnCancelar = $("<button>Cancelar</button>");
        btnCancelar.attr({"class": "btnCancelar"});
        btnCancelar.click(() => {
            alert("cancelar")
        });

        cancelar.append(btnCancelar);

        row.append(paciente, medico, dataConsulta, cancelar);
        bodyTabela.append(row);
    });

    return bodyTabela;
}
