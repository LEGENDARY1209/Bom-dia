document.addEventListener("DOMContentLoaded", function () {
    var resultadoElement = document.getElementById("resultado");
    var horarioInput = document.getElementById("horario");
    var checkBtn = document.getElementById("checkBtn");

    checkBtn.addEventListener("click", function () {
        var horario = horarioInput.value;
        var cumprimento = getCumprimento(horario);

        if (cumprimento !== null) {
            resultadoElement.textContent = cumprimento;
            resultadoElement.style.color = getColorForCumprimento(cumprimento);
        }
    });
});

function getCumprimento(horario) {
    if (!horario) {
        return null;
    }

    var partesHorario = horario.split(":");
    var hora = parseInt(partesHorario[0]);
    var minutos = parseInt(partesHorario[1]);

    if (isNaN(hora) || isNaN(minutos) || hora < 0 || hora > 23 || minutos < 0 || minutos > 59) {
        alert("Horário inválido. Insira o horário no formato HH:mm.");
        return null;
    }

    var cumprimento;

    if (hora >= 0 && hora < 12) {
        cumprimento = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        cumprimento = "Boa tarde!";
    } else {
        cumprimento = "Boa noite!";
    }

    return cumprimento;
}

function getColorForCumprimento(cumprimento) {
    if (cumprimento === "Bom dia!") {
        return "#00aeff"; /* Azul claro */
    } else if (cumprimento === "Boa tarde!") {
        return "#ff7f50"; /* Tom de laranja */
    } else {
        return "#8a2be2"; /* Tom de roxo */
    }
}
