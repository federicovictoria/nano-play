import style from './back.module.css';


export function backButton() {
    const backButton = document.createElement("button");
    backButton.classList.add(style.backButton);
    backButton.id = "back-button";
    backButton.textContent = "Back";
    return backButton.outerHTML;
}