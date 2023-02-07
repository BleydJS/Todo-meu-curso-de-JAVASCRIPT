function gerar () {
    let num = Number(document.getElementById ('txtnum').value)
    let tabu = document.getElementById ('caixa')

        if (num == 0) {
            window.alert ("Digita algum numero!")
        } else {
                tabu.innerHTML = ''
                for ( r = 1 ; r<=10 ; r++) {
                let opcoes = document.createElement ('option')
                opcoes.text = `${num} x ${r} = ${num * r}`
                tabu.appendChild(opcoes)
                }
        }




}