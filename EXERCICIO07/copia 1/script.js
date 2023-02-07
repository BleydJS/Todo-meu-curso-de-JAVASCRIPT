function carregar () {
var fotos = document.getElementById ("imagem")
var hr = document.querySelector("div#hora")
    

    var datah = new Date()
    var hora = datah.getHours ()
    var minuto = datah.getMinutes()
    var segundo = datah.getSeconds()

        hr.innerHTML = `<strong>horario ${hora}:${minuto}:${segundo}</strong>`

        if(hora > 0 && hora < 12){
            fotos.src = 'demanha.png'
            document.body.style.background = "#909785"
        }else if(hora >=12 && hora < 18){
            fotos.src = 'detarde.png'
            document.body.style.background = "#bedae8"
        }else{
            fotos.src = 'denoite.png'
            document.body.style.background = "#42385b"
        }






}