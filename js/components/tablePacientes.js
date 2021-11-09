import {genModal} from "./modal.js";
import {genOverlay} from "./overlay.js";

import {formatDate} from "../tools/formatDate.js";

/* Gera tabela de pacientes */
export function genTablePacientes() {
    let table = $("<table></>");
    table.attr({"id": "tablePacientes"});
    table.attr({"class": "tableUsuarios"});
    
    let head = $("<thead></>");
    let row = $("<tr></>");

    let celNome = $("<th>Nome</>");
    let celNasc = $("<th>Nascimento</>");
    let celCadastro = $("<th>Cadastro em</>");
    let celConcultas = $("<th>Consultas</>");
    let celAcoes = $("<th>Ações</>");

    row.append(celNome, celNasc, celCadastro, celConcultas, celAcoes);
    head.append(row);
    table.append(head);
    table.append("<tbody></tbody>");

    return table;
};

export function populateTablePacientes(data) {
    let bodyTabela = $("table#tablePacientes tbody");

    data.map((paciente) => {
        let row = $("<tr></tr>");
        row.attr({"id": paciente.id});

        let nome = $(`<td>${paciente.nome}</td>`);
        
        let nasc = $(`<td>${formatDate(paciente.dataNascimento)}</td>`);

        let cadastro = $(`<td>${formatDate(paciente.dataCadastro)}</td>`);

        let consultas = $(`<td></td>`);
        let btnConsultas = $("<button>Consultas</button>");
        btnConsultas.attr({"class": "btnConsultas"});
        btnConsultas.click(() => {
            genOverlay();
            genModal("paciente", paciente.id);
        });

        consultas.append(btnConsultas);

        let acoes = $(`<td></td>`);
        let btnAcoes = $("<button>Ações</button>");
        btnAcoes.attr({"class": "btnAcoes"});
        acoes.append(btnAcoes);

        row.append(nome, nasc, cadastro, consultas, acoes);
        bodyTabela.append(row);
    });
};