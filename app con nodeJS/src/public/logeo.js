document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form');
    const showMessage = document.querySelector('.showMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                // Usuario y contraseña correctos
                showMessage.textContent = 'Conectado';
                showMessage.style.color = 'green';
            } else {
                // Usuario y contraseña incorrectos
                showMessage.innerHTML = 'Usuario no registrado. <a href="/registro">Alístate</a>';
                showMessage.style.color = 'red';
            }
            // Mostrar el mensaje después de procesar la respuesta del servidor
            showMessage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
    });
});