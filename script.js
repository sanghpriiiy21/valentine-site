const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

let noCount = 0;

const noTexts = [
  "No 🙃",
  "Are you sure? 😳",
  "Really? 🥺",
  "Think again 😭",
  "No escape 😈",
  "Just say YES 💘"
];

/* NO button escape */
function moveNoButton() {
  noCount++;

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount < noTexts.length) {
    noBtn.textContent = noTexts[noCount];
  }

  noBtn.style.opacity = Math.max(0.2, 1 - noCount * 0.15);
  yesBtn.style.transform = `scale(${1 + noCount * 0.1})`;
}

/* Prevent NO click */
["mouseenter", "mousedown", "touchstart"].forEach(event => {
  noBtn.addEventListener(event, moveNoButton);
});

/* YES click */
yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");

  music.volume = 0.5;
  music.play().catch(() => {});
  heartExplosion();
});

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 300);

/* Heart explosion */
function heartExplosion() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.textContent = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1400);
  }
}
