import { updateDisplayValues } from "../../game-display/game-interface/game-interface.js";
import { updateStats } from "../../game-display/game-interface/stats-display.js";
import { defences, player } from "../player.js";

let barbarians = {
    weaponLevel: 1,
    defenceLevel: 1,
    troopAmount: 5,
    cohesion: 0.1
}

// Calculate the winner between defences and barbarians
function isPlayerWinner() {
    // Calculate the total defence power of the player's defences
    const defencePower = defences.guards * 2 + defences.wallDefenceLevel * 3 + (defences.boilingOil ? 2 : 0) + defences.ballistas * 4;

    // Calculate the total attack power of the barbarians
    const attackPower = barbarians.weaponLevel * 2 + barbarians.defenceLevel + barbarians.troopAmount * barbarians.cohesion;

    // Compare the defence power and attack power to determine the winner
    if (defencePower >= attackPower) {
        return true;
    } else if (defencePower < attackPower) {
        return false;
    }
}

export function barbarianAttack() {
    displayAttackWarning()

    setTimeout(() => {
        if (!isPlayerWinner()) {
            executeEnemyRaid();
            displayAttackResult()
            updateDisplayValues();
            if (document.getElementById("stats-container").style.display === "flex") {
                updateStats()
            }
        }
    }, 15000);    
}

function executeEnemyRaid() {
    //remove food
    if (player.food >= barbarians.troopAmount * 2) {
        player.food -= barbarians.troopAmount * 2
    } else {
        player.food = 0
    }
    
    //remove gold
    if (player.gold >= barbarians.troopAmount * 4) {
        player.gold -= barbarians.troopAmount * 4
    } else {
        player.gold = 0
    }
    
    
}

function displayAttackWarning() {
    const gameContainer = document.getElementById("game-container")
    const attackWarning = document.createElement("div")

    attackWarning.classList.add("warning")
    attackWarning.classList.add("flashing")
    attackWarning.id = "attack-warning"
    attackWarning.innerText = "BARBARIANS ATTACKING!"

    gameContainer.appendChild(attackWarning)
    setTimeout(() => {
        gameContainer.removeChild(attackWarning)
    }, 5000)
}

function displayAttackResult(playerWon) {
    const gameContainer = document.getElementById("game-container")
    const attackResult = document.createElement("div")

    attackResult.classList.add("attack-result")
    attackResult.classList.add("flashing")
    attackResult.id = "attack-result"
    playerWon ? attackResult.innerText = "Barbarians have been defeated" : attackResult.innerText = "You have been raided"

    gameContainer.appendChild(attackResult)
    setTimeout(() => {
        gameContainer.removeChild(attackResult)
    }, 5000)
}

export {barbarians}