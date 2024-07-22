

function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.src = 'img/luna.png'; // Cambia la imagen a un sol
        modeIcon.alt = 'Modo oscuro';   // Cambia el texto alternativo
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.src = 'img/sol.png'; // Cambia la imagen a una luna
        modeIcon.alt = 'Modo claro';  // Cambia el texto alternativo
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        let valid = true;

        // Limpiar mensajes de error anteriores
        document.getElementById('nombreError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('mensajeError').textContent = '';

        // Validar nombre (no debe contener números)
        if (/[\d]/.test(nombre)) {
            document.getElementById('nombreError').textContent = 'El nombre no puede contener números.';
            valid = false;
        }

        // Validar email (debe contener arroba y punto)
        if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('emailError').textContent = 'Por favor, ingresa un correo electrónico válido.';
            valid = false;
        }

        // Validar que todos los campos estén completos
        if (!nombre || !email || !mensaje) {
            if (!nombre) {
                document.getElementById('nombreError').textContent = 'Por favor, completa el campo nombre.';
            }
            if (!email) {
                document.getElementById('emailError').textContent = 'Por favor, completa el campo email.';
            }
            if (!mensaje) {
                document.getElementById('mensajeError').textContent = 'Por favor, completa el campo mensaje.';
            }
            valid = false;
        }

        // Si no es válido, prevenir el envío del formulario
        if (!valid) {
            event.preventDefault();
        }
    });
});

//aca estamos validando el formulario de contacto, donde sale los mensajes por medio de un span en rojo debajo de cada input.

document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const mensajeError = document.getElementById('mensajeError');

    function validateNombre() {
        if (/[\d]/.test(nombreInput.value)) {
            nombreError.textContent = 'El nombre no puede contener números.';
        } else {
            nombreError.textContent = '';
        }
    }

    function validateEmail() {
        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
        } else {
            emailError.textContent = '';
        }
    }

    function validateMensaje() {
        if (!mensajeInput.value) {
            mensajeError.textContent = 'Por favor, completa el campo mensaje.';
        } else {
            mensajeError.textContent = '';
        }
    }

    function validateForm() {
        validateNombre();
        validateEmail();
        validateMensaje();
    }

    nombreInput.addEventListener('input', validateNombre);
    emailInput.addEventListener('input', validateEmail);
    mensajeInput.addEventListener('input', validateMensaje);

    document.getElementById('contactForm').addEventListener('submit', (event) => {
        validateForm();
        if (nombreError.textContent || emailError.textContent || mensajeError.textContent) {
            event.preventDefault();
        }
    });
});



