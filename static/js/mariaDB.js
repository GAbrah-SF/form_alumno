let regex, key, dataBase

$(document).ready(function () {

    $("#crearBD").on("click", function (){

        $(function (){
            $("#nomBaseDatos").bind('keypress', function(event) {
                regex = new RegExp("^[a-zA-Z-_ ]+$");
                key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (!regex.test(key)) {
                    event.preventDefault();
                    return false;
                }
            });
        })

        Swal.fire({
            title: "Ingresa un nombre para la nueva Base de Datos:",
            width: "40%",
            background: "#000",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            confirmButtonText: "CREAR",
            cancelButtonColor: '#910018',
            cancelButtonText: "CANCELAR",
            input: "text",
            inputAttributes:{
                id: "nomBaseDatos",
            },
            inputValidator: dataBase => {

            // Si el valor es válido, debes regresar undefined. Si no, una cadena
                if (!dataBase) {
                    return "Por favor escribe el nombre de la Base de Datos";
                } else {
                    return undefined;
                }
            }
        }).then(resultado => {
            if (resultado.value) {
                dataBase = resultado.value;

                const quitarAcentos = (str) => {
                    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
                dataBase = quitarAcentos(dataBase).toLowerCase().replace(" ", "_")

                $.ajax({
                    url: "/DBcreada",
                    type: 'POST',
                    data: "nomBaseDatos="+dataBase,
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            background: "#000",
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 2000
                        }).then(
                            setTimeout('document.location.reload()',1000)
                        )
                    },
                    error: function (error) {
                        swal.fire({
                            position: 'center',
                            icon: 'error',
                            background: "#000",
                            title: (error.responseText),
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                })
            }
        });
    })
})

