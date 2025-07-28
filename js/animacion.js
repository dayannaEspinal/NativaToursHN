

document.addEventListener(
  "DOMContentLoaded", 
   ()=>{
  const animados = document.querySelectorAll(".bloque-animado");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.8, 
    }
  );

  animados.forEach((el) => observer.observe(el));

   function procesarDonacion(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const monto = document.getElementById("monto").value;
      const mensaje = document.getElementById("mensajeDonacion");

      if (monto > 0) {
        mensaje.textContent = `¡Gracias ${nombre} por tu generosa donación de L. ${monto}! 💚`;
      } else {
        mensaje.textContent = "Por favor, ingresa un monto válido.";
      }

      document.querySelector("form").reset();
    }

  
    function toggleFaq(element) {
      element.classList.toggle('active');
    }

    const slides = document.querySelectorAll(".slide");
    let current = 0;
    const interval = 5000; 

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

    showSlide(current); 
    setInterval(nextSlide, interval); 
});

     
