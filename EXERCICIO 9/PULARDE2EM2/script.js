function contar (){
    var comeco = Number(document.querySelector ("input#comeco").value)
    var fim = Number(document.querySelector ("input#fim").value)
    var passo = Number(document.querySelector ("input#passo").value)


        if (comeco == 0 || fim == 0 || passo == 0 || comeco == fim){
            window.alert("Preencha todas as lacunas corretamente.")
        } else if (comeco < fim){

            let mostrar = document.querySelector("div#prep")
            mostrar.innerHTML = 'contando: '


                for (let result = comeco ; result <= fim ; result += passo){
                    mostrar.innerHTML += `👉 ${result} `
                }
                mostrar.innerHTML += `🎏`

        } else if (comeco > fim){
            let mostrar = document.querySelector("div#prep")
            mostrar.innerHTML = 'contando: '

            for (let result = comeco ; result >= fim; result -= passo){
                mostrar.innerHTML += `👉 ${result}`
            }
            mostrar.innerHTML += `🎏`

        }
        


        }



