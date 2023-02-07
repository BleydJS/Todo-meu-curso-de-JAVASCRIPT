let num = document.querySelector ("input#fnum")
let lista = document.querySelector ("select#vetor")
let res = document.querySelector ("div#coisas")
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number (n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if( l.indexOf (Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero (num.value) && !inLista (num.value, vetor)) {
        vetor.push (Number(num.value))

        let criar = document.createElement ('option')
        criar.text = `Valor ${num.value} Adicionado`
        lista.appendChild (criar)
    } else {
        window.alert ("Numero invalido ou ja existente")
    }
}

function finalizar () {
    if (vetor == 0) {
        window.alert ("Adicione valores primeiro.")
    } else {
        media = 0
        soma = 0
        min = Math.min(...vetor)
        max = Math.max (...vetor)
        tot = vetor.length

        for (pos in vetor) {
            soma += vetor[pos]
        }

        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += 

    }
}