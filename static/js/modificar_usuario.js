let modUser, modNombre, modApellidos, modEmail, form_actualizar

$(document).ready(function (){
    try {
        form_actualizar = $("#actualizar")
        form_actualizar[0].reset()
    } catch {}
    $(".modificar").on("click", function (){
        modUser = ""
        modNombre = ""
        modApellidos = ""
        modEmail = ""

        $(this).parents("tr").find(".ususario").each(function() {
          modUser += $(this).html().toUpperCase()
        });
            $(".nameUser").html("Modificando al Usuario: "+modUser)
            $(".act_usuario").val(modUser.toLowerCase())

        $(this).parents("tr").find(".modNombre").each(function() {
          modNombre += $(this).html()
        });
            $(".act_nombre").val(modNombre)

        $(this).parents("tr").find(".modAppellidos").each(function() {
          modApellidos += $(this).html()
        });
            $(".act_apellidos").val(modApellidos)

        $(this).parents("tr").find(".modEmail").each(function() {
          modEmail += $(this).html()
        });
            $(".act_email").val(modEmail)
    })

    form_actualizar.submit(function (e){
        e.preventDefault()

        $.ajax({
            url: "/actualizar",
            type: 'POST',
            data: form_actualizar.serialize(),
            success: function (respuesta) {
                swal.fire({
                    position: 'center',
                    icon: 'success',
                    background: "#000",
                    title: (respuesta),
                    showConfirmButton: false,
                    timer: 1500
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
                    timer: 1500
                })
            }
        })
    })

})