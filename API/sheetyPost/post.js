let url = "https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno";
let body = {
  aluno: {
    //aluno chumbado para inserção na tabela do sheety
    nome: "",
    matricula: 0,
    turma: "",
  },
};
//adicionamos o parametro header do fetch
function addAluno() {
  body.aluno.nome = document.querySelector("#nome").value;
  body.aluno.matricula = parseInt(document.querySelector("#matricula").value);
  body.aluno.turma = document.querySelector("#turma").value;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(typeof body.aluno.matricula);
      console.log(json.aluno);
      console.log("funfou");
      alert("funfou");
    });
}
