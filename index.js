function verificarInscripcion() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let primero = parseInt(document.getElementById("primero").value);
    let segundo = parseInt(document.getElementById("segundo").value);
    let temas_aprobados = parseInt(document.getElementById("temas_aprobados").value);
    let desea_ir = document.getElementById("desea_ir").checked;
    let resultado = document.getElementById("resultado");

    if (edad >= 14 && edad <= 17 && primero >= 8 && segundo >= 8 && temas_aprobados == 3 && desea_ir) {
        resultado.innerText = "El alumno cumple con los requerimientos para participar del viaje";
        resultado.style.color = "green";
        return;
    }
    else {
        resultado.innerHTML = "NO CUMPLE <br>";

        if (edad > 17 || edad < 14) {
            resultado.innerHTML += "No tiene la edad de la indicada <br>";
            resultado.style.color = "red";
        }
        if (primero < 8) {
            resultado.innerHTML += "La primera nota es menor a la requerida <br>";
            resultado.style.color = "red";
        }
        if (segundo < 8) {
            resultado.innerHTML += "La segunda nota es menor a la requerida <br>";
            resultado.style.color = "red";
        }
        if (temas_aprobados != 3) {
            resultado.innerHTML += "No tiene ambos temas aprobados <br>";
            resultado.style.color = "red";
        }
        if (!desea_ir) {
            resultado.innerHTML += "No desea ir al campamento <br>";
            resultado.style.color = "red";
        }
        resultado.style.color = "red";
    }




}
