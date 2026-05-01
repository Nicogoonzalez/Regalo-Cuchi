let sections = document.querySelectorAll("section");

function mostrar(i) {
  sections.forEach((sec) => sec.classList.remove("visible"));
  sections[i].classList.add("visible");
  sections[i].scrollIntoView({ behavior: "smooth" });
}

function final() {
  let mensaje = document.getElementById("mensaje");
  escribirTexto(
    "Gracias por existir en mi vida, incluso a la distancia. No importa dónde estés, siempre voy a elegirte, Cuchi. Luchamos por el mismo sueño: una vida juntos que nos permita ser felices y formar una familia. Luchemos, oremos y que Dios lo haga realidad por nosotros. Te amo Cuchi.. Espero te haya gustado mi amor",
    mensaje,
  );

  lanzarCorazones();
}

// Música
let music = document.getElementById("music");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
  } else {
    music.pause();
  }
  playing = !playing;
}

// Corazones
function lanzarCorazones() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.innerText = "❤️";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 600);
}
function escribirTexto(texto, elemento) {
  let i = 0;
  elemento.innerHTML = "";

  let intervalo = setInterval(() => {
    elemento.innerHTML += texto[i];
    i++;

    if (i >= texto.length) {
      clearInterval(intervalo);
    }
  }, 40);
}
function empezar() {
  document.querySelectorAll("section")[1].classList.add("visible");
  document
    .querySelectorAll("section")[1]
    .scrollIntoView({ behavior: "smooth" });

  let music = document.getElementById("music");
  music.play();
}
let canvas = document.getElementById("estrellas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrellas = [];

for (let i = 0; i < 120; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5,
  });
}

function animarEstrellas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  estrellas.forEach((e) => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    ctx.fill();

    e.y += e.speed;

    if (e.y > canvas.height) {
      e.y = 0;
      e.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animarEstrellas);
}

animarEstrellas();

// Ajustar tamaño si cambia la ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
function mostrarMensajes() {
  let mensajes = document.querySelectorAll(".mensaje");

  mensajes.forEach((m, i) => {
    setTimeout(() => {
      m.classList.add("visible");
    }, i * 500);
  });
}
function mostrarCartas() {
  let cartas = document.querySelectorAll(".carta");

  cartas.forEach((carta, i) => {
    setTimeout(() => {
      carta.classList.add("mostrar");
    }, i * 1200); // tiempo entre cada carta
  });
}
function irCartas() {
  mostrar(2);
  setTimeout(mostrarCartas, 400);
}

function actualizarTiempo() {
  let inicio = new Date("2025-10-28"); // CAMBIAR
  let ahora = new Date();

  let diff = ahora - inicio;

  let dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerText =
    "Llevamos " + dias + " días juntos ❤️";
}

setInterval(actualizarTiempo, 1000);
