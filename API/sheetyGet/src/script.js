let url = "https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno";
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    // Do something with the data
    console.log(json);
    console.log(json.aluno);
    document.querySelector("#nome").value = json.aluno[0].nome;
    document.querySelector("#matricula").value = json.aluno[0].matricula;
    document.querySelector("#turno").value = json.aluno[0].turno;
  });

// .catch(() =>
//     console.log("errou");
// );

/* PUT
let url = 'https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno/2';
let body = {
  aluno: {
    ...
  }
}
fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body)
})
.then((response) => response.json())
.then(json => {
  // Do something with object
  console.log(json.aluno);
});
*/

/* DELETE
let url = 'https://api.sheety.co/f9186d94290e2cd211737e46b5351c91/2Dn/aluno/2';
fetch(url, {
  method: 'DELETE',
})
.then((response) => response.json())
.then(() => {
  console.log('Object deleted');
});
*/
