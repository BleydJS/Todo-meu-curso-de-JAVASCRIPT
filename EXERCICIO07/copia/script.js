function carregar () {
var fotos = document.getElementById("imagem")
var hr = document.querySelector("div#hora")
 // var data = new Date()
 // var hora1 = data.getHours()
 
    var hora1 = 20
    hr.innerHTML = `São ${hora1} horas`
   
    if(hora1 > 0 && hora1 < 12 ){
        fotos.src = 'manha.png'
        document.body.style.background = "#909785"
    }else if (hora1 >= 12 && hora1 < 18 ){
        fotos.src = 'tarde.png'
        document.body.style.background = "#bedae8"
    }else {
        fotos.src = "noite.png"
        document.body.style.background = "#42385b"
    }

}