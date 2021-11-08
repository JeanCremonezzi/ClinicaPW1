/* Gera tabela de pacientes */
export function genTablePacientes() {
    let table = $("<table></>");
    table.attr({"id": "tablePacientes"});
    
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

const formatDate = (date) => {
    date = new Date(date);

    const timezoneOffset = date.getTimezoneOffset();
    date.setTime(date.getTime() + (timezoneOffset * 60000));

    return(date.toLocaleDateString("pt-BR"));
};

export function populateTablePacientes(data) {
    let bodyTabela = $("table#tablePacientes tbody");

    data.map((paciente) => {
        let row = $("<tr></tr>");
        let nome = $(`<td>${paciente.nome}</td>`);
        let nasc = $(`<td>${formatDate(paciente.dataNascimento)}</td>`);
        let cadastro = $(`<td>${formatDate(paciente.dataCadastro)}</td>`);
        let consultas = $(`<td><button>Consultas</button></td>`);
        let acoes = $(`<td><button>Exibir</button></td>`);

        row.append(nome, nasc, cadastro, consultas, acoes);
        bodyTabela.append(row);
    });
};