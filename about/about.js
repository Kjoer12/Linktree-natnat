const btn = document.getElementById("btnMore");

btn.addEventListener("click", () => {
  alert("Silakan edit bagian ini sesuai kebutuhan kamu 😄");
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