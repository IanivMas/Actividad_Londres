function verificarInscripcion() {
    let nombre = document(document.getElementById("nombre").value);
    let edad = parseInt(document.getElementById("edad").value);
    let primero = parseInt(document.getElementById("primero").value);
    let segundo = parseInt(document.getElementById("segundo").value);
    let temas_aprobados = parseInt(document.getElementById("temas_aprobados").value);
    let desea_ir = parseInt(document.getElementById("desea_ir").value);
    let resultado = document.getElementById("resultado");

    if (edad >= 14 && edad <= 17 && primero >= 8 && segundo >= 8 && temas_aprobados == 3 && desea_ir.value == true) {
        resultado.innerText = "El alumno cumple con los requerimientos para participar del viaje";
        resultado.style.color = "green";
        return;
    }


}
