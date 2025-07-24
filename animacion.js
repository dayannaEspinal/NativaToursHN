
    // Animación de aparición de secciones al hacer scroll
    const secciones = document.querySelectorAll('.seccion');

    const mostrarSeccion = () => {
      secciones.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          sec.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', mostrarSeccion);
    window.addEventListener('load', mostrarSeccion);
