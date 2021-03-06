import { genModal } from "./modal.js";
import { genOverlay } from "./overlay.js";
import { actionsMedico } from "./actionsMedico.js";

import { formatDate } from "../tools/formatDate.js";

export function genTableMedicos(data) {
    let table = $("<table></table>");
    table.attr({"id": "tableMedicos"});
    table.attr({"class": "tableUsuarios"});
    
    let head = $("<thead></thead>");
    let row = $("<tr></tr>");

    let celNome = $("<th>Nome</th>");
    let celCadastro = $("<th>Cadastro em</th>");
    let celEspecialidade = $("<th>Especialidade</th>");
    let celConcultas = $("<th>Consultas</th>");
    let celAcoes = $("<th>Ações</th>");

    row.append(celNome, celCadastro, celEspecialidade, celConcultas, celAcoes);
    head.append(row);
    table.append(head);
    table.append(genBodyMedicos(data));

    return table;
};

function genBodyMedicos(data) {
    let bodyTabela = $("<tbody></tbody>");

    data.map((medico) => {
        let row = $("<tr></tr>");

        let nome = $(`<td>${medico.nome}</td>`);

        let cadastro = $(`<td>${formatDate(medico.dataCadastro)}</td>`);

        let nomeEspecialidade = (JSON.parse(localStorage.getItem("especialidades")))
        .find(espec => espec.id == medico.idEspecialidade).nome;

        let especialidade = $(`<td>${nomeEspecialidade}</td>`);

        let consultas = $("<td></td>");
        let btnConsultas = $("<button>Consultas</button>");
        btnConsultas.attr({"class": "btnConsultas"});
        btnConsultas.click(() => {
            genOverlay();
            genModal("medico", medico.id);
        });

        consultas.append(btnConsultas);

        let acoes = $(`<td></td>`);
        let btnAcoes = $("<button>Ações</button>");
        btnAcoes.attr({"class": "btnAcoes"});
        btnAcoes.click(() => {
            $("main").html("");
            $("main").append(actionsMedico(medico.id));
        });
        acoes.append(btnAcoes);

        row.append(nome, cadastro, especialidade, consultas, acoes);
        bodyTabela.append(row);
    });

    return bodyTabela;
};