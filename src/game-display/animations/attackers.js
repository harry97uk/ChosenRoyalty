// Animate people attacking the walls
const attackerWidth = 60;
const attackerHeight = 38;
const attackerSpeed = 1;
let attackerX = 1000;
let attackerY = 400;
let animationFinished = false

let currentFrame = 0
let offset = 72

// Draw the current frame of the animation
const spriteSheet = new Image();

export function initAttackersAnimation() {
    const attacker = document.createElement("div");
    attacker.id = "attacker"
    attacker.classList.add("attacker")
    attacker.width = "30";
    attacker.height = "40";
    const gameContainer = document.getElementById("game-container");
    gameContainer.appendChild(attacker);
    spriteSheet.src = "/src/game-display/sprite-sheets/run.png"; // Replace with your sprite sheet image path
}

export function animateAttackers() {
    //renderAttackers()
    if (animationFinished) {
        document.getElementById("attacker").style.visibility = "hidden";
        attackerX = 1000;
        attackerY = 400;
        animationFinished = false
        return true
    }
    return false
}

export function updateAttackers() {
    // Move attackers horizontally
    attackerX -= attackerSpeed;

    // Reset attacker position when it reaches the end of the canvas
    if (attackerX < 225) {
        animationFinished = true
    }

    const attacker = document.getElementById("attacker")
    attacker.style.left = `${attackerX}px`
    attacker.style.top = `${attackerY}px`

    // Set the background position with the offset
    const attackerElement = document.querySelector('.attacker');
    attackerElement.style.backgroundPosition = `${offset}px 42px`;

    if (attackerX % 5 == 0) {
        offset += 120
        if (offset > 1200) {
            offset = 72
        }
    }

}

function renderAttackers() {
    const canvas = document.getElementById("attackers");
    const ctx = canvas.getContext('2d');

    canvas.style.left = `${attackerX}px`
    canvas.style.top = `${attackerY}px`

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const numFrames = 10; // Number of frames in the animation
    const frameWidth = 20; // Width of each frame in the sprite sheet
    const frameHeight = 38; // Height of each frame in the sprite sheet

    ctx.drawImage(
        spriteSheet,
        currentFrame * frameWidth,
        0,
        frameWidth,
        frameHeight,
        0,
        0,
        attackerWidth,
        attackerHeight
    );

    currentFrame = (currentFrame + 1) % numFrames; // Calculate the current frame based on time

}