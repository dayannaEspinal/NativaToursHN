document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menuButton');
    const navMenu = document.querySelector('nav ul');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const interes = document.getElementById('interes').value;
            
            if (!nombre || !email || !interes) {
                alert('Por favor complete todos los campos requeridos.');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Por favor ingrese un correo electrónico válido.');
                return;
            }
            
            alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
            formContacto.reset();
        });
    }

        let index = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 3000); // Cambia cada 4 segundos

});