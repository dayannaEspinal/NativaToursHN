document.addEventListener(
    "DOMContentLoaded",
    ()=>{
        let currentIndex = 0;
        const slides = document.querySelectorAll('.slides');

        function showNextSlide() {
          slides[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % slides.length;
          slides[currentIndex].classList.add('active');
        }

        // Cambiar slide cada 4 segundos
        setInterval(showNextSlide, 4000);
          



            caruselInit();
        }
        //binding (this)
);
