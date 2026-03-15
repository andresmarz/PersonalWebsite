document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#five form");

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = {
            nombres: document.getElementById("nombres").value,
            apellidos: document.getElementById("apellidos").value,
            email: document.getElementById("email").value,
            telefono: document.getElementById("telefono").value,
            mensaje: document.getElementById("mensaje").value
        };

        try {

            const response = await fetch("https://localhost:7202/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Mensaje enviado correctamente");
                form.reset();
            } else {
                alert("Error al enviar el mensaje");
            }

        } catch (error) {
            console.error(error);
            alert("No se pudo conectar con el servidor");
        }

    });

});
