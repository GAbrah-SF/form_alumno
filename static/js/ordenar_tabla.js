let tabla, filas, valA, valB

$(document).ready(function (){
    $('th').on("click" ,function() {
        tabla = $(this).parents('table').eq(0)
        filas = tabla.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc) {
            filas = filas.reverse()
        }
        for (let i = 0; i < filas.length; i++) {
            tabla.append(filas[i])
        }
        setIcon($(this), this.asc);
    })

    function comparer(index) {
        return function(a, b) {
            valA = getCellValue(a, index),
                valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(fila, index) {
        return $(fila).children('td').eq(index).html()
    }

    function setIcon(elemnto, asc) {
        $("th").each(function(index) {
            $(this).removeClass("sorting");
            $(this).removeClass("asc");
            $(this).removeClass("desc");
        });
        elemnto.addClass("sorting");
        if (asc) elemnto.addClass("asc");
        else elemnto.addClass("desc");
    }
})