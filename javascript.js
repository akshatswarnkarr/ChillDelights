const prod = document.querySelectorAll(".prod");

const options = {rootMargin: "-300px"};

const fadeIn = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
    }
  });
},options);

prod.forEach((products) => {
  fadeIn.observe(products);
});
