let url = "https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno";
let body = {
  aluno: {
    nome: "Leonardo",
    matricula: "7070",
    turma: "noturno",
  },
};
fetch(url, {
  method: "POST",
  body: JSON.stringify(body),
  //aqui vai ter algo
})
  .then((response) => response.json())
  .then((json) => {
    // Do something with object
    console.log(json.aluno);
  });
//verificar o parametro header do fetch
