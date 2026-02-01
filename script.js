const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("bgMusic");

let noCount = 0;
const noTexts = [
  "No 🙃",
  "Are you sure? 🥺",
  "Pleeaaase? 🧸",
  "Don’t do this to me... 💔",
  "I'm gonna cry! 😭",
  "You're clicking the wrong one! 😈"
];

// Moving the NO button
function moveNo() {
  noCount++;
  
  // Make it move randomly
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Update text
  if (noCount < noTexts.length) {
    noBtn.textContent = noTexts[noCount];
  }

  // Make YES button bigger
  const newScale = 1 + (noCount * 0.15);
  yesBtn.style.transform = `scale(${newScale})`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// Celebration Burst Effect
function createBurst() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("span");
    particle.innerHTML = ["🌸", "💖", "✨", "💗"][Math.floor(Math.random() * 4)];
    particle.style.position = "fixed";
    particle.style.left = "50vw";
    particle.style.top = "50vh";
    particle.style.fontSize = "2rem";
    particle.style.zIndex = "1000";
    
    const destinationX = (Math.random() - 0.5) * 100;
    const destinationY = (Math.random() - 0.5) * 100;

    particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destinationX}vw, ${destinationY}vh) scale(0)`, opacity: 0 }
    ], {
      duration: 1500,
      easing: 'ease-out'
    });

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1500);
  }
}

// Clicking YES
yesBtn.addEventListener("click", () => {
  createBurst();
  setTimeout(() => {
    page1.classList.remove("active");
    page2.classList.add("active");
    music.volume = 0.3;
    music.play().catch(() => console.log("Music needs interaction first"));
  }, 300);
});

// Continuous Background Hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = Math.random() > 0.5 ? "💖" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 300);
