const formatDate = (date) => {
    date = new Date(date);

    const timezoneOffset = date.getTimezoneOffset();
    date.setTime(date.getTime() + (timezoneOffset * 60000));

    return(date.toLocaleDateString("pt-BR"));
};

export function genTableConsultas(consultas) {
    let table = $("<table></table>");
    table.attr({"id": "tableConsultas"});

    let thead = $("<thead></thead>");
    let rowHead = $("<tr></tr>");
    let celMedico = $("<th>Médico</th>");
    let celPaciente = $("<th>Paciente</th>");
    let celData = $("<th>Data</th>");
    let celCancelar = $("<th>Cancelar</th>");

    rowHead.append(celMedico, celPaciente, celData, celCancelar);
    thead.append(rowHead);
    table.append(thead);

    let tbody = $("<tbody></tbody>")

    consultas.map((consulta) => {
        let row = $("<tr></tr>");
        row.attr({"id": consulta.id});
        let medico = $(`<td>${consulta.idMedico}</td>`);
        let paciente = $(`<td>${consulta.idPaciente}</td>`);
        let data = $(`<td>${formatDate(consulta.data)}</td>`);

        let btnCancelar = $("<button>Cancelar</button>");
        btnCancelar.attr({"class": "btnCancelar"});
        
        let cancelar = $("<td></td>");
        cancelar.append(btnCancelar);

        row.append(medico, paciente, data, cancelar);
        tbody.append(row);
    });

    table.append(tbody);

    return table;

};