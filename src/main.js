import { barbarianAttack } from "./game-logic/attacks/attacks.js";
import { initialiseGameDisplay, scene } from "./game-display/game-interface/game-interface.js";
import { isGameLost } from "./game-logic/end-game.js";
import { incrementTime } from "./game-logic/time.js";
import { animateAttackers, initAttackersAnimation, updateAttackers } from "./game-display/animations/attackers.js";

const playGameButton = document.getElementById("play-game-button")
playGameButton.onclick = playGame

let lastUpdateTime = 0;
let lastAttackTime = 0;
let beingAttacked = false
const interval = 500; // 1 second interval

let endGame = false

function playGame() {
    const mainMenuContainer = document.getElementById("main-menu-container")
    const gameContainer = document.getElementById("game-container")
    mainMenuContainer.style.display = "none"
    gameContainer.style.display = "flex"
    initialiseGameDisplay();
    initAttackersAnimation();
    gameLoop()
}

/*
Game Loop
*/
function gameLoop(timestamp) {
    // Calculate the time elapsed since the last update
    const deltaTime = timestamp - lastUpdateTime;

    // Update game state
    update(deltaTime, timestamp);

    // Render game
    render();

    // Call the next frame
    requestAnimationFrame(gameLoop);
}

/*
Update game logic
*/
function update(deltaTime, timestamp) {
    // Check if a second has passed
    if (deltaTime >= interval) {
        // Perform the desired action once a second
        incrementTime();

        if (isGameLost()) {
            //end the game
        }

        if (Math.random() < 0.5 && timestamp - lastAttackTime >= 5000*3 && !beingAttacked) {
            beingAttacked = true
            barbarianAttack()
            //
            document.getElementById("attacker").style.visibility = "visible"
            lastAttackTime = timestamp
        }

        
        

        // Reset the last update time
        lastUpdateTime = timestamp;
    }

    if (beingAttacked) {
        //update attack animation while not in scene
        updateAttackers()
    }

}

/*
Render game graphics
*/
function render() {
    if (beingAttacked && scene == 3) {
        document.getElementById("attacker").style.visibility = "visible";
        const final = animateAttackers();
        if (final) {
            beingAttacked = false
        }
    } else if (beingAttacked) {
        document.getElementById("attacker").style.visibility = "hidden";
    }
}
