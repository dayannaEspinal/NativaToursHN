document.addEventListener("DOMContentLoaded", () => {

  const observerAnimados = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  document.querySelectorAll(".bloque-animado, .galeria img").forEach(el => {
    el.classList.add("animada");
    observerAnimados.observe(el);
  });

  //PROCESAR FORMULARIO DE DONACIÓN
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function procesarDonacion(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const monto = document.getElementById("monto").value;
      const mensaje = document.getElementById("mensajeDonacion");

      if (monto > 0) {
        mensaje.textContent = `¡Gracias ${nombre} por tu generosa donación de L. ${monto}! 💚`;
      } else {
        mensaje.textContent = "Por favor, ingresa un monto válido.";
      }

      form.reset();
    });
  }

  //SLIDES
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? "1" : "0";
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 3000);
  }

  //MODAL DE IMÁGENES
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("img-ampliada");
  const caption = document.getElementById("caption");
  const cerrar = document.getElementById("cerrar");

  if (modal && modalImg && caption && cerrar) {
    document.querySelectorAll(".galeria img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.textContent = img.alt;
      });
    });

    cerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  //FAQ 
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // BOTÓN DE RESERVA
  const btnReserva = document.getElementById("btnReserva");
  if (btnReserva) {
    btnReserva.addEventListener("click", () => {
      alert("Gracias por tu interés en viajar con NativaTours HN. Muy pronto podrás reservar en línea.");
    });
  }

});
