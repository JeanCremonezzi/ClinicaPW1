import { genModal } from "./modal.js";
import { genOverlay } from "./overlay.js";

import { formatDate } from "../tools/formatDate.js";

/* Gera tabela de pacientes */
export function genTablePacientes(data) {
    let table = $("<table></table>");
    table.attr({"id": "tablePacientes"});
    table.attr({"class": "tableUsuarios"});
    
    let head = $("<thead></table>");
    let row = $("<tr></tr>");

    let celNome = $("<th>Nome</th>");
    let celNasc = $("<th>Nascimento</th>");
    let celCadastro = $("<th>Cadastro em</th>");
    let celConcultas = $("<th>Consultas</th>");
    let celAcoes = $("<th>Ações<th>");

    row.append(celNome, celNasc, celCadastro, celConcultas, celAcoes);
    head.append(row);
    table.append(head);

    table.append(genBodyPacientes(data));

    return table;
};

function genBodyPacientes(data) {
    let bodyTabela = $("<tbody></tbody>");

    data.map((paciente) => {
        let row = $("<tr></tr>");

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

        let acoes = $("<td></td>");
        let btnAcoes = $("<button>Ações</button>");
        btnAcoes.attr({"class": "btnAcoes"});
        acoes.append(btnAcoes);

        row.append(nome, nasc, cadastro, consultas, acoes);
        bodyTabela.append(row);
    });

    return bodyTabela;
};