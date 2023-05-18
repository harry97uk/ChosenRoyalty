import { cityDecisions } from "../../game-logic/decisions/city-decisions.js";
import { executeDecision } from "../../game-logic/decisions/decisions.js";
import { scene } from "./game-interface.js"
import { updateCityStats } from "./stats-display.js";

export function decisionsButton() {
    const decisionsButton = document.createElement("div")
    decisionsButton.classList.add("decisions-button")
    decisionsButton.id = "decisions-button"
    decisionsButton.innerText = "D"
    decisionsButton.onclick = displayDecisions

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(initDecisionsDisplay())
    gameContainer.appendChild(decisionsButton)
}

function initDecisionsDisplay() {
    const decisionsDisplay = document.createElement("div")
    decisionsDisplay.id = "decisions-container"
    decisionsDisplay.style.display = "none";
    return decisionsDisplay
}

export function displayDecisions() {
    const decisionsDisplay = document.getElementById("decisions-container")
    decisionsDisplay.style.display === "flex" ? decisionsDisplay.style.display = "none" : decisionsDisplay.style.display = "flex";

    switch (scene) {
        case 1:
            displayThroneDecisions()
            break;
        case 2:
            displayCityDecisions()
            break;
        case 3:
            displayDefenceDecisions()
            break;
        default:
            break;
    }
}

function displayThroneDecisions() {
    const decisionsDisplay = document.getElementById("decisions-container")
    while (decisionsDisplay.firstChild) {
        decisionsDisplay.removeChild(decisionsDisplay.lastChild);
    }


}

function displayCityDecisions() {
    const decisionsDisplay = document.getElementById("decisions-container")
    while (decisionsDisplay.firstChild) {
        decisionsDisplay.removeChild(decisionsDisplay.lastChild);
    }

    console.log(cityDecisions);
    cityDecisions.forEach(d => {
        const decision = document.createElement("div")
        decision.classList.add("decision")
        decision.innerText = d.name
        decision.addEventListener('click', function(){
            executeDecision(d.effects)
            updateCityStats()
        })
        decisionsDisplay.appendChild(decision)
    })
}

function displayDefenceDecisions() {
    const decisionsDisplay = document.getElementById("decisions-container")
    while (decisionsDisplay.firstChild) {
        decisionsDisplay.removeChild(decisionsDisplay.lastChild);
    }
}