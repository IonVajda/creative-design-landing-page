document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});

const newYear = new Date().getFullYear();
const date = newYear;
document.getElementById("date").textContent = date;
