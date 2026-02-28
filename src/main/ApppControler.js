import { rpsStart } from '../games/index.js';
import { AppState } from './modell.js';
import { HomeView } from './viewMain.js';

const root = document.getElementById("app");
const appState = new AppState();

export function initApp() {
  appState.subscribe(render);
  render();

  events();
}

function render() {
  const view = appState.getView();
  root.innerHTML = "";

  switch (view) {
    case 'home':
      root.innerHTML = HomeView();
      break;
    case 'rps':
      rpsStart(root);
      break;
    default:
      console.error("View not found");
      break;
  }
}

function events() {
  document.addEventListener("click", (e) => {
    const { target } = e;

    if (target.matches("#rps")) {
      appState.setView("rps");
    }
  })
}