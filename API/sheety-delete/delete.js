function delAluno() {
  id = document.querySelector("#id").value;
  let url = `https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno/${id}`;
  alert(url);
  fetch(url, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      console.log("Object deleted");
    });
}
