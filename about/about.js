const btn = document.getElementById("btnMore");

btn.addEventListener("click", () => {
  alert("Comming Soon 😄");
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".about-container");
  const profile = document.querySelector(".profile img");
  const texts = document.querySelectorAll(
    ".about-content h1, .subtitle, .description, .social, button"
  );

  /* ===== ANIMASI MASUK (PROGRAMMER STYLE) ===== */
  container.style.opacity = "0";
  container.style.transform = "translateY(40px) scale(0.98)";

  setTimeout(() => {
    container.style.transition = "0.8s ease";
    container.style.opacity = "1";
    container.style.transform = "translateY(0) scale(1)";
  }, 200);

  texts.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    setTimeout(() => {
      el.style.transition = "0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 400 + i * 120);
  });

  /* ===== PROFIL BERGOYANG HALUS ===== */
  let angle = 0;
  setInterval(() => {
    angle = angle === 2 ? -2 : 2;
    profile.style.transition = "0.6s ease-in-out";
    profile.style.transform = `rotate(${angle}deg)`;
  }, 1200);

  /* ===== HOVER EFFECT PROFIL ===== */
  profile.addEventListener("mouseenter", () => {
    profile.style.transform = "scale(1.08) rotate(0deg)";
  });

  profile.addEventListener("mouseleave", () => {
    profile.style.transform = "scale(1)";
  });

  /* ===== BUTTON CLICK ===== */
  const btn = document.getElementById("btnMore");
  btn.addEventListener("click", () => {
    btn.innerText = "Loading...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
      btn.innerText = "Tentang Saya";
      btn.style.opacity = "1";
      alert("Halo 👋 Ini animasi ala programmer 😄");
    }, 800);
  });
});

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Karakter hujan
const chars = "01KMSTORE<>/{}[]()$#@!*&";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(2, 6, 23, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#38bdf8";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 40);