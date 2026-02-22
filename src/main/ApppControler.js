import { HomwView } from "./viewMain";

export function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = HomwView();
}