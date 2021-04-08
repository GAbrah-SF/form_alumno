let form_alumno, form_buscador, mi_usuario

$(document).ready(function (){
    try {
        form_alumno = $("#formulario")
        form_alumno[0].reset()
    } catch {}
    try {
        form_buscador = $("#form_buscador")
        form_buscador[0].reset()
    } catch {}

    $("#limpiar").on("click", function (){
        $(".campos").val("")
    })

    $("#buscar").on("click", function (){
        if ($("#buscador").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Ingresa el usuario del alumno",
                showConfirmButton: false,
                timer: 1000
            })
            return false
        }
    })

    form_alumno.submit(function (e){
        e.preventDefault()

        if ($("#nombre").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Campo NOMBRE(S) vacío",
                showConfirmButton: false,
                timer: 1000
            })
            return false;
        } else if ($("#apepat").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Campo APELLIDO PATERNO vacío",
                showConfirmButton: false,
                timer: 1000
                })
            return false;
        } else if ($("#apemat").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Campo APELLIDO MATERNO vacío",
                showConfirmButton: false,
                timer: 1000
            })
            return false;
        } else if ($("#email").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Campo E-MAIL vacío",
                showConfirmButton: false,
                timer: 1000
            })
            return false;
        } else if ($("#usuario").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Campo USUARIO vacío",
                showConfirmButton: false,
                timer: 1000
            })
            return false;
        } else if ($("#pasword").val().trim() === "") {
            Swal.fire({
                icon: "warning",
                background: "#000",
                title: "Campo PASSWORD vacío",
                showConfirmButton: false,
                timer: 1000
            })
            return false;
        } else {
            Swal.fire({
                icon: "question",
                background: "#000",
                title: "¿Guardar Alumno?",
                text: "Después, podrás realizar cambios en el usuario",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#19980b',
                cancelButtonColor: '#910018',
                confirmButtonText: 'GUARDAR',
                cancelButtonText: 'CANCELAR',
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "/guardar",
                    type: 'POST',
                    data: form_alumno.serialize(),
                    success: function (success) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            background: "#000",
                            title: (success),
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // console.log(success)
                    },
                    error: function (error) {
                        swal.fire({
                            position: 'center',
                            icon: 'error',
                            background: "#000",
                            title: (error.responseText),
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // console.log(error)
                    }
                });
                form_alumno[0].reset()
            }
        });
        }
    })

    $(".eliminar").on("click", function (e){
        e.preventDefault()
        mi_usuario = ""

        // Obtenemos todos los valores contenidos en los <td> de la fila seleccionada
        $(this).parents("tr").find(".ususario").each(function() {
            mi_usuario += $(this).html().toUpperCase()
        });

        Swal.fire({
            icon: "question",
            background: "#000",
            title: "Eliminar a " + mi_usuario,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            confirmButtonText: 'SÍ',
            cancelButtonColor: '#910018',
            cancelButtonText: 'NO',
        }).then((result) =>{
            if (result.value) {
                $.ajax({
                    url: "/eliminar",
                    type: 'POST',
                    data: "id_user="+mi_usuario,
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            background: "#000",
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1000
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
                            timer: 1000
                        })
                    }
                })
            }
        })
    })
})