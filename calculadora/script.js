var formula = "";

function printa(dado) {
  formula = formula + dado; //formula += dado
  document.getElementById("formula").innerText = formula;
}

function apaga() {
  formula = "";
  document.getElementById("formula").innerText = formula;
}
