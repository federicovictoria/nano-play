// estado global de la aplicación

export class AppState {
  static instance = null;
  
  view = ''
  subscribers = []
  
  constructor() {
    if (AppState.instance) {
      return AppState.instance;
    }
    return AppState.instance = this;
  }
  
  setView ( view ) {
    this.view = view;
    this.notify();
  }
  
  subscribe(sub) {
    this.subscribers.push(sub);
  }
  
  notify() {
    this.subscribers.forEach(sub => sub());
  }
  
}
