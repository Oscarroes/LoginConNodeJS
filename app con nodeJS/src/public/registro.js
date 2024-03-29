
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Obtener los valores de los campos de entrada
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Objeto con los datos del usuario
        const userData = {
            email: email,
            username: username,
            password: password
        };

        // Enviar los datos a la base de datos mediante una petición fetch
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                // Si la inserción es exitosa, redirigir al usuario a la home
                window.location.href = '/';
            } else {
                // Manejar errores
                console.error('Error al registrar el usuario');
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
    });
});
