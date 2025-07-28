

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
    const interval = 3000; 

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

    // 👉 IntersectionObserver para animación al entrar en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // solo una vez
            }
        });
    }, {
        threshold: 0.2 // activa cuando 20% del elemento es visible
    });

    document.querySelectorAll('.animada').forEach(img => {
        observer.observe(img);
    });

    function reservarViaje() {
  alert("Gracias por tu interés en viajar con NativaTours HN. Muy pronto podrás reservar en línea.");
}

    // Modal
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img-ampliada");
    const caption = document.getElementById("caption");
    const cerrar = document.getElementById("cerrar");

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

    // Animación por scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Solo una vez
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.galeria img').forEach(img => {
        img.classList.add('animada');
        observer.observe(img);
    });
});

});




     
