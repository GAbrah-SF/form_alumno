let nombre, apePat, apeMat, usuario

$(document).ready(function (){
    $("#generar").on("click", function (){
        nombre = $('#nombre').val()
        apePat = $('#apepat').val()
        apeMat = $('#apemat').val()

            if (nombre === "") {
                Swal.fire({
                    icon: "warning",
                    background: "#000",
                    title: "Campo NOMBRE(S) vacío",
                    showConfirmButton: false,
                    timer: 1000
                })
                return false;
            } else if (apePat === "") {
                Swal.fire({
                    icon: "warning",
                    background: "#000",
                    title: "Campo APELLIDO PATERNO vacío",
                    showConfirmButton: false,
                    timer: 1000
                })
                return false;
            } else if (apeMat === "") {
                Swal.fire({
                    icon: "warning",
                    background: "#000",
                    title: "Campo APELLIDO MATERNO vacío",
                    showConfirmButton: false,
                    timer: 1000
                })
                return false;
            } else {
                //Más de un Nombre
                separador = / de la | de los | de | del | /

                if (nombre.split(separador).length === 2) {
                    nombre = nombre.toLowerCase().substring(0, 1) + nombre.toLowerCase().split(separador)[1].substring(0, 1);
                } else if (nombre.split(separador).length === 3) {
                    nombre = nombre.toLowerCase().substring(0, 1) +
                        nombre.toLowerCase().split(separador)[1].substring(0, 1) + nombre.toLowerCase().split(separador)[2].substring(0, 1);
                } else {
                    nombre = nombre.toLowerCase().substr(0, 1);
                }

                //Apellidos Paterno compuestos por 2 o 3 palabras
                separador1 = / de |-| de la | de los | del | y /
                separador2 = /de la |de los |de |y |del |De la |De los |De |Y |Del /

                if (apePat.split(separador1).length > 1) {
                    apePat = apePat.split(separador1)[0].toLowerCase().substring(0, 1) + apePat.split(separador1)[1].toLowerCase().substring(undefined);
                } else if (apePat.split(separador2).length > 1) {
                    apePat = apePat.split(separador2)[apePat.split(separador2).length - 1].toLowerCase();
                } else {
                    apePat = apePat.toLowerCase().substring(undefined);
                }

                //Apellidos Materno compuestos por 2 o 3 palabras
                if (apeMat.split(separador1).length > 1) {
                    apeMat = apeMat.split(separador1)[0].toLowerCase().substring(0, 1) + apeMat.split(separador1)[1].toLowerCase().substring(0, 1);
                } else if (apeMat.split(separador2).length > 1) {
                    apeMat = apeMat.split(separador2)[apeMat.split(separador2).length - 1].toLowerCase().substring(0, 1);
                } else {
                    apeMat = apeMat.toLowerCase().substring(0, 1);
                }

                //Eliminación de acentos
                const eliminaAcentos = (str) => {
                    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }

                //Concatenando elNombre de  Usuario del Coordinador y generando Nip de 4 números
                usuario = eliminaAcentos(nombre + apePat + apeMat)
                $("#usuario").val(usuario)
                $("#pasword").val(generarPassword(10, "alfa_numerico"))
            }
    })
})