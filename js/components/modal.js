export function genModal() {
    let modal = $("<div></div>");
    modal.attr({"class": "modal"});

    modal.html("<p>Nenhuma consulta encontrada!</p>");

    $("body").prepend(modal);
}