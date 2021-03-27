let tiempo, hora, minutos, segundos, meridiano, reloj

function RelojDigital(){
    tiempo = new Date()
    hora = tiempo.getHours()
    minutos = tiempo.getMinutes()
    segundos = tiempo.getSeconds()
    meridiano = (hora > 12)?"pm.":"am."
    hora = hora%12

    if (hora < 10){
        hora = "0"+hora
    }
    if (hora === "00"){
        hora = 12
    }
    if (minutos < 10){
        minutos = "0"+minutos
    }
    if (segundos < 10){
        segundos = "0"+segundos
    }

    reloj = hora+":"+minutos+":"+segundos+" "+meridiano
    $("#hora, [name=act_hora]").val(reloj)
}

$(document).ready(function (){
    setInterval(RelojDigital, 1000)
})