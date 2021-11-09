import {genModal} from "./modal.js";
import {genOverlay} from "./overlay.js";

import {formatDate} from "../tools/formatDate.js";

export function genTableMedicos() {
    let table = $("<table></>");
    table.attr({"id": "tableMedicos"});
    table.attr({"class": "tableUsuarios"});
    
    let head = $("<thead></>");
    let row = $("<tr></>");

    let celNome = $("<th>Nome</>");
    let celCadastro = $("<th>Cadastro em</>");
    let celEspecialidade = $("<th>Especialidade</>");
    let celConcultas = $("<th>Consultas</>");
    let celAcoes = $("<th>Ações</>");

    row.append(celNome, celCadastro, celEspecialidade, celConcultas, celAcoes);
    head.append(row);
    table.append(head);
    table.append("<tbody></tbody>");

    return table;
};

export function populateTableMedicos(data) {
    let bodyTabela = $("table#tableMedicos tbody");

    data.map((medico) => {
        let row = $("<tr></tr>");
        row.attr({"id": medico.id});

        let nome = $(`<td>${medico.nome}</td>`);

        let cadastro = $(`<td>${formatDate(medico.dataCadastro)}</td>`);

        let especialidade = $(`<td>${medico.idEspecialidade}</td>`);

        let consultas = $(`<td></td>`);
        let btnConsultas = $("<button>Consultas</button>");
        btnConsultas.attr({"class": "btnConsultas"});
        btnConsultas.click(() => {
            genOverlay();
            genModal();
        });

        consultas.append(btnConsultas);

        let acoes = $(`<td></td>`);
        let btnAcoes = $("<button>Ações</button>");
        btnAcoes.attr({"class": "btnAcoes"});
        acoes.append(btnAcoes);

        row.append(nome, cadastro, especialidade, consultas, acoes);
        bodyTabela.append(row);
    });
};