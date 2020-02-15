document.querySelector("button#contar").addEventListener("click", contagem)

function contagem() {
  var inicio = document.querySelector('input#inicio').value
  var fim = document.querySelector('input#fim').value
  var passo = document.querySelector('input#passo').value
  var resultado = document.querySelector('div#resultado')

  //Converter todos os valores para Number
  var numInicio = Number(inicio)
  var numFim = Number(fim)
  var numPasso = Number(passo)

  //Definindo validações
  //Erro 1: input vazio
  if (inicio == '' || fim == '') {
    //OBS: não dá pra usar numInicio e numFim pq nesse caso input vazio = 0. Só com input em string dá para diferenciar.
    //como fazer pra definir as var com o mesmo valor?
    // pq não dá pra usar inicio == undefined?
    resultado.innerHTML = `<p>Impossível contar. Insira um número nos espaços vazios.</p>`
    return
  }

  //Erro 2: se passo = 0, automaticamente considerar passo = 1
  if (numPasso <= 0) {
    alert(`Número de passos inválido. Considerando Passo = 1`)
    numPasso = 1
    document.querySelector('input#passo').value = 1 //Mostra passo = 1 no input
  }

  //Lista com números do MENOR para o MAIOR
  if (numInicio < numFim) {
    var listaMenorMaior = []
    while (numInicio <= numFim) {
      listaMenorMaior.push(numInicio)
      numInicio += numPasso
    }
    //Remove vírgula e adiciona emojis
    var menorMaiorEmojis = `▶️ ${listaMenorMaior.join(' ➡️ ')} ⏹🏁`

    //Mostra o resultado final
    resultado.innerHTML = `<p>${menorMaiorEmojis}</p>`
    return
  }

  //Lista com números do MAIOR para o MENOR
  if (numInicio > numFim) {
    var listaMaiorMenor = []
    while (numInicio >= numFim) {
      listaMaiorMenor.push(numInicio)
      numInicio -= numPasso
    }
    //Remove vírgula e adiciona emojis
    var maiorMenorEmojis = `▶️ ${listaMaiorMenor.join(' ➡️ ')} ⏹🏁`

    //Mostra o resultado final
    resultado.innerHTML = `<p>${maiorMenorEmojis}</p>`
    return
  }

  /*
  20/01 - 10h20
  Problema: as duas listas não conseguem coexistir, mesmo usando if.
  Só se comento a lista maior-menor, a outra funciona corretamente.
  Ou seja, uma está influenciando na outra.
  Mas o maior-menor está funcionando perfeitamente (ajeitei a lógica)

  21/01 - 18h25
  O issue acima foi resolvido com o return no final de cada if. Mas deve haver outro jeito.
  */
}