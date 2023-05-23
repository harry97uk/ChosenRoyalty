// Animate people attacking the walls
const attackerSpeed = 1;
let animationFinished = false
let offsetPositions = [72, 192, 312, 432, 552, 672, 792, 912, 1032]
let attackers = []

export function initAttackersAnimation(troopAmount) {
    for (let i = 0; i < troopAmount; i++) {
        const attacker = document.createElement("div");
        attacker.id = `attacker-${i}`
        let attackerAttributes = {
            id: attacker.id,
            x: Number((1000 + (Math.random() * 200)).toFixed(0)),
            y: Number((400 + (Math.random() * 75)).toFixed(0)),
            offset: offsetPositions[Math.floor(Math.random()*offsetPositions.length)]
        }
        attackers.push(attackerAttributes)
        attacker.classList.add("attacker")
        attacker.width = "30";
        attacker.height = "40";
        const gameContainer = document.getElementById("game-container");
        gameContainer.appendChild(attacker);
    }
}

export function isAnimationFinished() {
    //renderAttackers()
    if (animationFinished) {
        attackers.forEach(a => {
            const attacker = document.getElementById(a.id)
            attacker.remove()
        })
        animationFinished = false
        return true
    }
    return false
}

export function updateAttackers() {

    attackers.forEach(a => {
        a.x -= attackerSpeed
        const attacker = document.getElementById(a.id)
        attacker.style.left = `${a.x}px`
        attacker.style.top = `${a.y}px`
        attacker.style.backgroundPosition = `${a.offset}px 42px`

        if (a.x % 5 == 0) {
            a.offset += 120
            if (a.offset > 1200) {
                a.offset = 72
            }
        }

        if (a.x < 225) {
            a.offset = -0.01
        }
    })

    // Reset attacker position when it reaches the end of the canvas
    if (attackers.every(a => a.x < 225)) {
        animationFinished = true
    }
}
