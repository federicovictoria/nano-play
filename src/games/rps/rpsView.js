import "./rps.css";
import { backButton } from "../components/backButton/back";


export function rpsview() {
    const rpsContainer = document.createElement("div");
    rpsContainer.classList.add("rpsContainer");

    const rpsHeader = document.createElement("header");
    rpsHeader.classList.add("rpsHeader");
    rpsHeader.innerHTML = `
    ${backButton()}

    `

    rpsContainer.appendChild(rpsHeader);

    const rpsMain = document.createElement("main");
    rpsMain.classList.add("rpsMain");

    rpsMain.innerHTML = `
    <section class="rpsSectionScore">
        <h2>Score</h2>
        <div class="rpsScore">
            <div class="rpsScorePlayer">
                <h3>Player</h3>
                <p>0</p>
            </div>
            <div class="rpsScoreBot">
                <h3>Bot</h3>
                <p>0</p>
            </div>
        </div>
    </section>
    `

    rpsContainer.appendChild(rpsMain);


    return rpsContainer.outerHTML

}