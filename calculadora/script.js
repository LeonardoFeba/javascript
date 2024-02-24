var formula = "";
var numero = "";
var numeros = [];
var operadores = [];

function printa(dado) {
  if (dado == "+" || dado == "-" || dado == "/" || dado == "x") {
    numeros.push(Number(numero));
    operadores.push(dado);
    numero = "";
  } else {
    numero = numero + dado;
  }

  formula = formula + dado; //formula += dado
  document.getElementById("formula").innerText = formula;
}

function calcula() {
  printa("e");
  let resultado;
  for (let i = 0; i < numeros.length; i++) {
    switch (operadores[i]) {
      case "+":
        resultado = numeros[i] + numeros[i + 1];
        break;
      case "-":
        resultado = numeros[i] - numeros[i + 1];
        break;
      case "x":
        resultado = numeros[i] * numeros[i + 1];
        break;
      case "/":
        resultado = numeros[i] / numeros[i + 1];
        break;
      case "e":
        break;
      default:
        alert("Operador não encontrado");
        break;
    }
    numeros[i + 1] = resultado;
  }
  document.getElementById("resultado").innerText = resultado;
}

function apaga() {
  // formula = "";
  formula = formula.substring(0, formula.length - 1);
  document.getElementById("formula").innerText = formula;
}
