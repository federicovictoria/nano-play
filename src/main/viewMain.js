import './main.css';

export function HomwView() {
    const view = document.createElement('div');
    view.classList.add('home-view');
  view.innerHTML = `
      <header class="home-header">
        <img src="/nanoPlay-logo.svg" alt="Nano Play Logo" class="logo">
        <h1>Nano Play</h1>
        
        <a href="https://github.com/federicovictoria/nano-play.git" class="github-link">
          <img src="/src/assets/icons/icon-github.svg" alt="GitHub Logo">
        </a>
          
      </header>
      <main class="home-content">
        <div class="home-hero">
        <h2>Welcome to Nano Play</h2>
        <p>Welcome to the Home View of the Nano Play application.</p>
        </div>
      
        
        <section class="home-section-galery">
          <article class="home-article">
            <img src="#" >
            <h3>Gallery</h3>
            <p>Explore our collection of stunning images and artwork in the gallery section.</p>
          </article>
        </section>
        
        </main>
    `;
    return view.outerHTML;
}