import { cityDecisions } from "../../game-logic/decisions/city-decisions.js";
import { costNeeded, executeDecision, playerCanAffordDecisionCost } from "../../game-logic/decisions/decisions.js";
import { defenceDecisions } from "../../game-logic/decisions/defence-decisions.js";
import { playAudio } from "../../game-sounds/audio.js";
import { scene, updateDisplayValues } from "./game-interface.js"
import { updateStats } from "./stats-display.js";

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

    cityDecisions.forEach(d => {
        decisionsDisplay.appendChild(addDecisionButtonFunctionality(d))
    })
}

function displayDefenceDecisions() {
    const decisionsDisplay = document.getElementById("decisions-container")
    while (decisionsDisplay.firstChild) {
        decisionsDisplay.removeChild(decisionsDisplay.lastChild);
    }

    defenceDecisions.forEach(d => {
        decisionsDisplay.appendChild(addDecisionButtonFunctionality(d))
    })
}

function highlightCostNeeded(costName) {
    const costDisplay = document.getElementById(`${costName}-display`)
    costDisplay.classList.add("flashing")
    setTimeout(() => {
        costDisplay.classList.remove("flashing")
    }, 2000);
}

function addDecisionButtonFunctionality(d) {
    const decision = document.createElement("div")
    decision.classList.add("decision")
    decision.innerText = d.name
    decision.addEventListener('click', function () {
        if (playerCanAffordDecisionCost(d.costs)) {
            playAudio("decision-chosen")
            executeDecision(d.effects, d.costs)
            updateDisplayValues()
            if (document.getElementById("stats-container").style.display === "flex") {
                updateStats()
            }
        } else {
            const cost = costNeeded(d.costs)
            if (cost !== "") {
                highlightCostNeeded(cost)
            }
        }
    })
    return decision
}