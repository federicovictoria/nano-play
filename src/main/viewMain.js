import "./main.css";

function cardInative() {
  const card = document.createElement("div");
  card.classList.add("card-inactive");
  card.innerHTML = `
    <img src="/src/assets/icons/ask.svg" >
    <p>Coming Soon</p>
  `
  return card.outerHTML;
}

export function HomwView() {
  const view = document.createElement("div");
  view.classList.add("home-view");
  const viewHeader = document.createElement("header");
  viewHeader.classList.add("home-header");
  viewHeader.innerHTML = `
    <div >
      <img src="/nanoPlay-logo.svg" alt="Nano Play Logo" class="logo">
      <h1 class="logo-text">Nano Play</h1>
    </div>
    
    <a href="https://github.com/federicovictoria/nano-play.git" class="github-link">
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
            <article class="home-card">
             <img src="/src/assets/imgs/miniatura-1.png">
             <div class="card-content">
              <h3>RPS card edition</h3>
              <button class="playGame" data-game="rps">Play</button>
             </div>
            </article>

            ${cardInative()}
            ${cardInative()}
            ${cardInative()}
            
        </section>
    `;
  view.appendChild(viewMain);

  // footer con redes sociales(linkedin, github) y créditos
  const viewFooter = document.createElement("footer");
  viewFooter.classList.add("home-footer");
  viewFooter.innerHTML = `
    <p>© 2024 Nano Play. All rights reserved.</p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/federicovictoria/" class="linkedin-link">
        <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn Logo">
      </a>
      <a href=" https://github.com/federicovictoria/nano-play.git" class="github-link">
        <img src="/src/assets/icons/icon-github.svg" alt="GitHub Logo">
      </a>
    </div>
  `

  view.appendChild(viewFooter);
  return view.outerHTML;
}
