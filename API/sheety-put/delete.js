function alterar() {
  let url =
    "https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno/2";
  let body = {
    aluno: {},
  };
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.aluno);
    });
}
