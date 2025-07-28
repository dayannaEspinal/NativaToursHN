document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-images img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) img.classList.add("active");
    });
  }

  function showNext() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function showPrev() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  showImage(current);
});
