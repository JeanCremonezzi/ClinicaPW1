/* Gera tabela de pacientes */
export function tablePacientes() {
    let table = $("<table></>");
    table.attr({"id": "tablePacientes"});
    
    let head = $("<thead></>");
    let row = $("<tr></>");

    let celNome = $("<th></>");
    celNome.text("Nome");

    let celNasc = $("<th></>");
    celNasc.text("Nascimento");

    let celCadastro = $("<th></>");
    celCadastro.text("Cadastro em");

    let celConcultas = $("<th></>");
    celConcultas.text("Consultas");

    let celAcoes = $("<th></>");
    celAcoes.text("Ações");

    row.append(celNome, celNasc, celCadastro, celConcultas, celAcoes);
    head.append(row);
    table.append(head);

    return table;
}