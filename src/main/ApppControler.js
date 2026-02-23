import { HomwView } from "./viewMain";
import { AppState } from './modell.js';

const globalState = new AppState();
const app = document.getElementById('app');

export function initApp() {
  globalState.subscribe(render);
  globalState.setView('home');
  render(globalState.view);
}

function render(view) {
  switch (view) {
    case 'home':
      app.innerHTML = HomwView();
      break;
    default:
      app.innerHTML = HomwView();
  }
}