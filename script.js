// ===== Year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
// Close menu when a link is tapped
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ===== Dark mode toggle (persisted) =====
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = saved || (prefersDark ? "dark" : "light");
applyTheme(initial);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

// ===== Scroll reveal animations =====
const revealEls = document.querySelectorAll(
  ".card, .price, .showcase__text, .showcase__art, .section__title, .section__lead"
);
revealEls.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// ===== Signup form (demo, no backend) =====
const form = document.getElementById("signupForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  note.textContent = `Thanks! We'll send the starter kit to ${email} 🎉`;
  form.reset();
});
