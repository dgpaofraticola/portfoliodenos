function formatoNombre(input) {
    let words = input.value.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
} 

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