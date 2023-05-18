import { setScene } from "../game-interface/game-interface.js";

// Render the city
export function renderCity() {
    setScene(2)
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext('2d')

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the sky
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(1, '#1E90FF');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#013220'
    ctx.fillRect(0, canvas.height - canvas.height / 6, canvas.width, canvas.height / 6);

    // Draw the buildings
    const numBuildings = 7; // Number of buildings in the city
    const buildingSpacing = 20

    for (let i = 0; i < numBuildings; i++) {
        const buildingHeight = 100
        const buildingWidth = 80
        const x = (i * (buildingWidth + buildingSpacing)) > canvas.width ? (i * (buildingWidth + buildingSpacing)) / ((i * (buildingWidth + buildingSpacing)) / canvas.width) : (i * (buildingWidth + buildingSpacing))
        const y = (canvas.height - canvas.height / 6) - buildingHeight;

        // Draw the building
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x, y, buildingWidth, buildingHeight);
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, buildingWidth, buildingHeight)

        // Add a roof to the building
        const roofHeight = 20;
        ctx.fillStyle = '#800000';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + buildingWidth, y);
        ctx.lineTo(x + buildingWidth / 2, y - roofHeight);
        ctx.closePath();
        ctx.fill();
    }
}

