import { deleteConsulta } from "../api/consultas.js";

import { formatDate } from "../tools/formatDate.js";
import { setAllData } from "../tools/setLocalStorage.js";

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


        let pacienteNome = (JSON.parse(localStorage.getItem("pacientes")))
        .find(pac => pac.id == consulta.idPaciente).nome;
        let paciente = $(`<td>${pacienteNome}</td>`);

        let medicoNome = (JSON.parse(localStorage.getItem("medicos")))
        .find(med => med.id == consulta.idMedico).nome;
        let medico = $(`<td>${medicoNome}</td>`);

        let dataConsulta = $(`<td>${formatDate(consulta.data)}</td>`);

        let cancelar = $("<td></td>");
        let btnCancelar = $("<button>Cancelar</button>");
        btnCancelar.attr({"class": "btnCancelar"});
        btnCancelar.click(() => {

            deleteConsulta(consulta.id)
            .done((resp) => {

                if (resp.status == "Erro") {
                    alert("Ocorreu um erro ao cadastrar consulta. Tente novamente");

                } else {
                    alert("Consulta cancelada")
                    setAllData();
                    $(btnCancelar).parent().parent().remove();
                };
            })
            .catch(() => {
				alert("Ocorreu um erro ao deletar consulta. Tente novamente");
            })
        });

        cancelar.append(btnCancelar);

        row.append(paciente, medico, dataConsulta, cancelar);
        bodyTabela.append(row);
    });

    return bodyTabela;
}
