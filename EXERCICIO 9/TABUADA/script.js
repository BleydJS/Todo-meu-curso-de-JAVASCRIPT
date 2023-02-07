function gerar (){
    let numtab = Number(document.getElementById('txttab').value)
    let tabu = document.getElementById ('tabs')

        if(numtab == 0){
            window.alert ("Digite algum numero")
        } else {
            tabu.innerHTML = ''
            for ( r=1 ; r <= 10 ; r++ ){
                
                let item = document.createElement ('option')
                item.text = `${numtab} x ${r} = ${numtab * r }`
                tabu.appendChild(item)
            }
        }



}