import "./main.css";

function cardInative() {
  const card = document.createElement("div");
  card.classList.add("card-inactive");
  card.innerHTML = `
    <img src="#" alt="Coming Soon Icon">
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
             <img src="#">
             <div class="card-content">
              <h3>Gallery</h3>
              <button class="playGame" data-game="">Play</button>
             </div>
            </article>

            ${cardInative()}
            ${cardInative()}
            ${cardInative()}
            
        </section>
    `;
  view.appendChild(viewMain);

  const viewFooter = document.createElement("footer");
  viewFooter.classList.add("home-footer");
  // viewFooter.innerHTML = `
  //   <div class="footer-content">
  //     <p>&copy; 2024 Nano Play. All rights reserved.</p>
  //     <nav class="footer-nav">
  //       <a href="#">Home</a>
  //       <a href="#">About</a>
  //       <a href="#">Contact</a>
  //     </nav>
  //   </div>
  //   `;

  view.appendChild(viewFooter);
  return view.outerHTML;
}
