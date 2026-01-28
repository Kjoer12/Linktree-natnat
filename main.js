const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

document.body.appendChild(canvas);

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// bunga
const flowers = [];
const flowerEmoji = ["🌸", "🌺", "🌼", "💮"];

function createFlower() {
  return {
    x: Math.random() * w,
    y: -20,
    size: Math.random() * 20 + 16,
    speed: Math.random() * 1.5 + 0.5,
    sway: Math.random() * 2 - 1,
    emoji: flowerEmoji[Math.floor(Math.random() * flowerEmoji.length)]
  };
}

// spawn bunga
setInterval(() => {
  if (flowers.length < 40) {
    flowers.push(createFlower());
  }
}, 300);

function draw() {
  ctx.clearRect(0, 0, w, h);

  flowers.forEach((f, i) => {
    ctx.font = `${f.size}px serif`;
    ctx.fillText(f.emoji, f.x, f.y);

    f.y += f.speed;
    f.x += f.sway * 0.3;

    if (f.y > h + 30) {
      flowers.splice(i, 1);
    }
  });

  requestAnimationFrame(draw);
}

draw();

const toggle = document.getElementById("theme-toggle");

// cek mode terakhir
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});