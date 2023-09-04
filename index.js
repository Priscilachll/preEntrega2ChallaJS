
const valorInput = document.getElementById("valor");
const unidadOrigenSelect = document.getElementById("unidadOrigen");
const unidadDestinoSelect = document.getElementById("unidadDestino");


const resultadoElement = document.getElementById("resultado");


let valor, unidadOrigen, unidadDestino;


function convertirUnidades() {
  
    valor = parseFloat(valorInput.value);
    unidadOrigen = unidadOrigenSelect.value;
    unidadDestino = unidadDestinoSelect.value;

   
    let resultado;

    if (unidadOrigen === unidadDestino) {
        resultado = valor; 
    } else if (unidadOrigen === "metro" && unidadDestino === "centimetro") {
        resultado = valor * 100;
    } else if (unidadOrigen === "centimetro" && unidadDestino === "metro") {
        resultado = valor / 100;
    } else if (unidadOrigen === "metro" && unidadDestino === "pulgada") {
        resultado = valor * 39.37;
    } else if (unidadOrigen === "pulgada" && unidadDestino === "metro") {
        resultado = valor / 39.37;
    } else if (unidadOrigen === "centimetro" && unidadDestino === "pulgada") {
        resultado = valor / 2.54;
    } else if (unidadOrigen === "pulgada" && unidadDestino === "centimetro") {
        resultado = valor * 2.54;
    }

   
    resultadoElement.textContent = `El resultado es: ${resultado} ${unidadDestino}`;
}
