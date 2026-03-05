import { Score } from "./models/score";
import { rpsview } from "./rpsView";

// get instance of score
const score = new Score();

export function rpsStart(app) {
    app.innerHTML = rpsview();
}