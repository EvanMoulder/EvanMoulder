/* ---------- Typewriter effect ----------
   - Types the title string one character at a time
   - Keeps it simple and readable
*/
const titleEl = document.getElementById("title");
const titleText = "Welcome to Evan’s Site";
const typeDelay = 70; // ms per character

function typeWriter(i = 0) {
  if (i <= titleText.length) {
    titleEl.textContent = titleText.slice(0, i);
    setTimeout(() => typeWriter(i + 1), typeDelay);
  }
}
typeWriter();

/* ---------- Scroll reveal ----------
   - Uses IntersectionObserver to add 'is-visible'
   - Sections fade/slide in when entering viewport
*/
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.12 } // trigger when ~12% visible
);

revealEls.forEach((el) => observer.observe(el));

/* ---------- Button interaction ----------
   - Adds a playful click animation + message
*/
const cta = document.getElementById("cta");
cta.addEventListener("click", () => {
  cta.style.transform = "translateY(-1px) scale(1.06)";
  setTimeout(() => (cta.style.transform = ""), 140);
  alert("Purple power activated 💜");
});
