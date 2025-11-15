$(function () {

    // -----------------------
    //   MODO OSCURO
    // -----------------------
    if (localStorage.getItem("tema") === "oscuro") {
        $("body").addClass("oscuro");
    }

    $("#btn-tema").on("click", function () {
        $("body").toggleClass("oscuro");

        if ($("body").hasClass("oscuro")) {
            localStorage.setItem("tema", "oscuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });


    // -----------------------
    //   CAMBIO DE TIPOGRAFÍA
    // -----------------------
    if (localStorage.getItem("fuente") === "mono") {
        $("body").addClass("mono");
    }

    $("#btn-fuente").on("click", function () {
        $("body").toggleClass("mono");

        if ($("body").hasClass("mono")) {
            localStorage.setItem("fuente", "mono");
        } else {
            localStorage.setItem("fuente", "normal");
        }
    });


    // -----------------------
    //   FORMULARIO (contacto)
    // -----------------------
    if ($("#form-contacto").length) {

        $("#form-contacto").on("submit", function (e) {
            e.preventDefault();

            let nombre = $("#nombre").val().trim();
            let email = $("#email").val().trim();
            let mensaje = $("#mensaje").val().trim();
            let errores = "";

            if (nombre === "") errores += "Falta el nombre. ";
            if (email === "" || email.indexOf("@") === -1) errores += "Email inválido. ";
            if (mensaje.length < 5) errores += "Mensaje muy corto. ";

            if (errores !== "") {
                $("#mensaje-form").text(errores).css("color", "red");
            } else {
                $("#mensaje-form").text("¡Gracias por contactarme!").css("color", "green");
                this.reset();
            }
        });
    }

});
