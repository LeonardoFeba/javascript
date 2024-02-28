var formula = "";

function printa(dado) {
  formula = formula + dado; //formula += dado
  document.getElementById("formula").innerText = formula;
}

function apaga() {
  formula = "";
  //formula = formula.substing(0,formula.length-1);
  document.getElementById("formula").innerText = formula;
}
