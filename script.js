const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("bgMusic");

let noCount = 0;

const noTexts = [
  "No 🙃",
  "Are you sure? 🥺",
  "Really? 😳",
  "Don’t break my heart 💔",
  "You can’t say no 😈",
  "Just say YES 💖"
];

/* NO button escapes */
function moveNo() {
  noCount++;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";

  if (noCount < noTexts.length) {
    noBtn.textContent = noTexts[noCount];
  }

  yesBtn.style.transform = `scale(${1 + noCount * 0.12})`;
}

["mouseover", "mousedown", "touchstart"].forEach(e =>
  noBtn.addEventListener(e, moveNo)
);

/* YES click */
yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
  music.volume = 0.5;
  music.play();
});

/* Hearts generator */
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = Math.random() > 0.5 ? "💖" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 4 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}, 250);

/* Sparkles */
const sparkles = document.querySelector(".sparkles");
setInterval(() => {
  const star = document.createElement("span");
  star.innerHTML = "✨";
  star.style.left = Math.random() * 100 + "vw";
  sparkles.appendChild(star);

  setTimeout(() => star.remove(), 6000);
}, 400);
