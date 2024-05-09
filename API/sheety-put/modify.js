function alterar() {
  let id = document.getElementById("id").value;
  let url = `https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno/${id}`;
  let body = {
    aluno: {
      nome: "",
      matricula: 0,
      turma: "",
    },
  };

  body.aluno.nome = document.getElementById("nome").value;
  body.aluno.turno = document.getElementById("turno").value;
  body.aluno.matricula = document.getElementById("matricula").value;

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.aluno);
    });
}
