document.addEventListener("DOMContentLoaded", function () {
    var resultadoElement = document.getElementById("resultado");

    var horario = prompt("Digite o horário (formato: HH:mm)");
    var cumprimento = getCumprimento(horario);
    
    if (cumprimento !== null) {
        resultadoElement.textContent = cumprimento;
        console.log(cumprimento);
    }
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

    if (hora < 12) {
        cumprimento = "Bom dia!";
    } else if (hora < 18) {
        cumprimento = "Boa tarde!";
    } else {
        cumprimento = "Boa noite!";
    }

    return cumprimento;
}