import { initialiseGameDisplay } from "./game-display/game-interface/game-interface.js";
import { incrementTime } from "./game-logic/time.js";

const playGameButton = document.getElementById("play-game-button")
playGameButton.onclick = playGame

let lastUpdateTime = 0;
const interval = 1000; // 1 second interval

function playGame() {
    const mainMenuContainer = document.getElementById("main-menu-container")
    const gameContainer = document.getElementById("game-container")
    mainMenuContainer.style.display = "none"
    gameContainer.style.display = "flex"
    initialiseGameDisplay();
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

        // Reset the last update time
        lastUpdateTime = timestamp;
    }

}

/*
Render game graphics
*/
function render() {
}
