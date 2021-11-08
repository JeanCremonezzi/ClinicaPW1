export function genOverlay() {
    let overlay = $("<div></div>");
    overlay.attr({"class": "overlay"});
    $("body").css("overflow", "hidden");

    overlay.click(() => {
        overlay.remove();
        $("body").css("overflow", "auto");
    });

    $("body").prepend(overlay);
};