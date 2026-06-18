let valor1 = "";
let valor2 = "";
let operador = "";

const cuerpoCalculadora = document.querySelector(".cuerpoCalculadora");
const botones = document.querySelectorAll(".boton");
const pantalla = document.querySelector(".pantalla");

pantalla.setAttribute("style", "font-weight: bold; padding: 1rem");

botones.forEach(function (boton) {
    boton.addEventListener("click", function(e) {
        let valorAsignado = e.target.value;

        if(valorAsignado === "clear") {
            pantalla.textContent = "";
            operador = "";
            valor1 = "";
            valor2 = "";
        } else if(valorAsignado === "+" || valorAsignado === "-" || valorAsignado ===  "/" || valorAsignado === "*") {
            operador = valorAsignado;
            valor1 = pantalla.textContent;
            pantalla.textContent = "";
        } else if(valorAsignado === "=") {
            valor2 = pantalla.textContent;

            let resultado = operacion(valor1, operador, valor2);
            pantalla.textContent = resultado;
        } else {
            pantalla.textContent += valorAsignado;
        }
    });
});


function suma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function resta(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function division(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

function multiplicacion(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}


function operacion(valor1, operador, valor2) {
    if(operador === "+") {
        return suma(valor1, valor2);
    } else if(operador === "-") {
        return resta(valor1, valor2);
    } else if(operador === "*") {
        return multiplicacion(valor1, valor2);
    } else if(operador === "/") {
        if(valor2 === "0") {
            return "Buen intento, pero no...";
        }
        
        return division(valor1, valor2);
    }
}
