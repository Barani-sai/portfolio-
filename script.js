const featuredCertificates = [
  ["Software Development Internship", "EDL Technologies", "INTERNSHIP", "software-development-internship.jpg"],
  ["Full Stack MERN Development Bootcamp", "Error Makes Clever", "FULL STACK", "full-stack-mern.jpg"],
  ["Generative AI Masters 2026", "Udemy · 50 hours", "GENERATIVE AI", "generative-ai-masters.jpg"],
  ["TensorFlow for Deep Learning Bootcamp", "Udemy · 63 hours", "MACHINE LEARNING", "tensorflow-deep-learning.jpg"],
  ["Oracle Agentic AI Foundations Associate", "Oracle · 2026", "GENERATIVE AI", "oracle-agentic-ai.jpg"],
  ["Claude 101", "Anthropic", "AI", "claude-101.jpg"],
  ["Claude Code 101", "Anthropic", "AI DEVELOPMENT", "claude-code-101.jpg"],
  ["Prompt Engineering Course", "Error Makes Clever", "GENERATIVE AI", "prompt-engineering.jpg"]
];
const otherCertificates = [
  ["Oracle Foundations Associate", "Oracle · 2023"],
  ["Data & Analytics", "SAP REACH Program · PSG iTech"],
  ["Certificate of Achievement", "Naan Mudhalvan · TNSDC"],
  ["Data Science Internship", "IMAGECON"],
  ["Python Internship", "IMAGECON"],
  ["Certificate of Appreciation", "Project Expo"],
  ["Computer Education Diploma", "CCI Computer Education"]
];
const featuredGrid = document.getElementById("featured-certificates");
if (featuredGrid) {
  featuredGrid.innerHTML = featuredCertificates.map(([title, issuer, kind, file]) => {
    const image = `assets/certificate-images/${file}`;
    return `<article class="certificate-photo-card"><div class="certificate-photo-stage"><button class="certificate-photo" type="button" data-image="${image}" data-caption="${title} · ${issuer}" aria-label="Enlarge certificate: ${title}"><img src="${image}" alt="${title} certificate issued by ${issuer}" loading="eager"><span class="certificate-zoom" aria-hidden="true">⌕ View certificate</span></button><span class="certificate-ribbon">${kind}</span></div><div class="certificate-photo-info"><div><h3>${title}</h3><p>${issuer}</p></div><span aria-hidden="true">↗</span></div></article>`;
  }).join("");
}
const otherGrid = document.getElementById("other-certificates");
if (otherGrid) {
  otherGrid.innerHTML = otherCertificates.map(([title, issuer], index) =>
    `<article class="other-certificate"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${issuer}</p></div><b aria-hidden="true">✳</b></article>`
  ).join("");
}
const progress = document.getElementById("progress-bar");
const updateProgress = () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = `${total > 0 ? (window.scrollY / total) * 100 : 0}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
document.querySelectorAll(".shot, .certificate-photo").forEach(button => button.addEventListener("click", () => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector("img").alt;
  lightboxCaption.textContent = button.dataset.caption;
  lightbox.showModal();
}));
lightbox?.querySelector(".close")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
