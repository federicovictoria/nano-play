import "./main.css";

export function HomwView() {
  const view = document.createElement("div");
  view.classList.add("home-view");
  const viewHeader = document.createElement("header");
  viewHeader.classList.add("home-header");
  viewHeader.innerHTML = `
    <img src="/nanoPlay-logo.svg" alt="Nano Play Logo" class="logo">
    <h1>Nano Play</h1>
    
    <a href="https://github.com/federicovictoria/nano-play.git" class="github-link">
      <img src="/src/assets/icons/icon-github.svg" alt="GitHub Logo">
    </a>`;

  view.appendChild(viewHeader);

  const viewMain = document.createElement("main");
  viewMain.classList.add("home-content");
  viewMain.innerHTML = `
        <div class="home-hero">
          <div class="text-content">
            <h2>Welcome to Nano Play</h2>
            <p>
              Nano Play is a small platform of mini practice games designed for quick skill-building and playful learning. Try short challenges that sharpen reaction time, logic, and creativity — play, practice, and improve.
            </p>
            <div class="hero-button">
              <button class="playGame" data-game="">Play a Game</button>
              <a class="github-link" href="https://github.com/federicovictoria/nano-play.git">GitHub</a>
            </div>
          </div>
          <div class="hero-card">
            <article class="home-card">
              <img src="#">
              <h3>Gallery</h3>
              <p>Explore our collection of stunning images and artwork in the gallery section.</p>
              <button class="playGame" data-game="">Play</button>
            </article>
          </div>
          
        </div>
      
        
        <section class="home-section-galery">

        </section>
    `;
  view.appendChild(viewMain);

  const viewFooter = document.createElement("footer");
  viewFooter.classList.add("home-footer");
  viewFooter.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2024 Nano Play. All rights reserved.</p>
      <nav class="footer-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
    `;

  view.appendChild(viewFooter);
  return view.outerHTML;
}
