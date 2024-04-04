let url = 'https://api.sheety.co/9d92e891538b64858a9b0a1f2a3fe7d3/alunos/pagina1';

const template = (item) => {
    console.log(item)
    let linha = document.createElement('tr')
    linha.innerHTML = `<td>${item.nome}</td><td>${item.matricula}</td><td>${item.turno}</td>`
    document.getElementById('tabela').appendChild(linha)
}

fetch(url)
  .then((resposta) => {
    //console.log(resposta)
    return resposta.json()
  })
    .then((respostadarespsota) => {
      // Do something with the data
      //console.log(respostadarespsota)
      //console.log(respostadarespsota.pagina1);
      let dados = respostadarespsota.pagina1
      dados.map(template)
    })
      .catch((errouuu) =>{
        console.log(errouuu)
        console.log("Algo errado não está certo")
      })

