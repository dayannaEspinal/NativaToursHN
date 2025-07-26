document.addEventListener(
    "DOMContentLoaded",
    ()=>{
     
  const elementos = document.querySelectorAll('.animacion');

  const mostrarAlScroll = () => {
    const scrollY = window.scrollY + window.innerHeight;
    elementos.forEach(el => {
      if (scrollY > el.offsetTop + 50) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrarAlScroll);
  window.addEventListener('load', mostrarAlScroll);


);
