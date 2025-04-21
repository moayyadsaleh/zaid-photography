document.addEventListener("DOMContentLoaded", () => {
  // Modal Gallery
  const modal = document.getElementById("modal"),
    modalImg = document.getElementById("modalImg");
  document.querySelectorAll(".gallery-grid img").forEach((el) =>
    el.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = el.src.replace("400x300", "1600x900");
    })
  );
  document
    .getElementById("modalClose")
    .addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial-item"),
    total = testimonials.length;
  let idx = 0;
  testimonials[idx].classList.add("active");
  setInterval(() => {
    testimonials[idx].classList.remove("active");
    idx = (idx + 1) % total;
    testimonials[idx].classList.add("active");
  }, 5000);

  // Mobile Nav Toggle
  const toggle = document.getElementById("mobileToggle"),
    nav = document.querySelector("nav ul");
  toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
  });
});
function toggleNav() {
  if (window.innerWidth <= 768)
    document.querySelector("nav ul").style.display = "none";
}
