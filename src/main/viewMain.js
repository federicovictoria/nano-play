import "./main.css";

function cardInactive() {
  const card = document.createElement("div");
  card.classList.add("card-inactive");
  card.innerHTML = `
    <img src="/src/assets/icons/ask.svg" alt="Coming soon">
    <p>Coming Soon</p>
  `;
  return card.outerHTML;
}

function cardActive({ title, id, img = '/src/assets/imgs/miniatura-1.png' }) {
  const card = document.createElement("article");
  card.classList.add("home-card");
  card.innerHTML = `
    <img src="${img}" alt="${title}">
    <div class="card-content">
      <h3>${title}</h3>
      <button class="playGame" id="${id}">Play</button>
    </div>
  `;
  return card.outerHTML;
}

export function HomeView() {
  const view = document.createElement("div");
  view.classList.add("home-view");

  const viewHeader = document.createElement("header");
  viewHeader.classList.add("home-header");
  viewHeader.innerHTML = `
    <div>
      <img src="/nanoPlay-logo.svg" alt="Nano Play Logo" class="logo">
      <h1 class="logo-text">Nano Play</h1>
    </div>
    <a href="https://github.com/federicovictoria/nano-play" class="github-link" aria-label="Nano Play on GitHub">
      <img src="/src/assets/icons/icon-github.svg" alt="GitHub Logo">
    </a>`;
  view.appendChild(viewHeader);

  const viewMain = document.createElement("main");
  viewMain.classList.add("home-content");
  viewMain.innerHTML = `
    <div class="home-hero">
      <h2>Welcome to Nano Play</h2>
      <p>
        Nano Play is a small platform of mini practice games designed for quick skill-building and playful learning. Try short challenges that sharpen reaction time, logic, and creativity — play, practice, and improve.
      </p>
    </div>

    <section class="home-section-grid">
      ${cardActive({ title: "Reaction Time", id: "rps" })}
      ${cardInactive()}
      ${cardInactive()}
      ${cardInactive()}
    </section>
  `;
  view.appendChild(viewMain);

  const viewFooter = document.createElement("footer");
  viewFooter.classList.add("home-footer");
  viewFooter.innerHTML = `
    <div class="footer-left">
      <p>© 2026 Nano Play</p>
      <small class="muted">Built for quick practice and learning</small>
    </div>

    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="/about">About</a>
      <a href="/privacy">Privacy</a>
      <a href="/contact">Contact</a>
    </nav>

    <div class="footer-right social-links">
      <a href="https://www.linkedin.com/in/federicovictoria/" class="linkedin-link" aria-label="LinkedIn">
        <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn Logo">
      </a>
      <a href="https://github.com/federicovictoria/nano-play" class="github-link" aria-label="GitHub">
        <img src="/src/assets/icons/icon-github.svg" alt="GitHub Logo">
      </a>
    </div>
  `;

  view.appendChild(viewFooter);
  return view.outerHTML;
}


