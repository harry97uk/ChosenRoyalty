import { setScene } from "../game-interface/game-interface.js";

// Render the castle walls scene
export function renderCastleScene() {
  setScene(3);
  const canvas = document.getElementById("background-canvas");
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sky
  const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  skyGradient.addColorStop(0, '#87CEEB');
  skyGradient.addColorStop(1, '#1E90FF');
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the grassland
  ctx.fillStyle = '#013220';
  ctx.fillRect(0, canvas.height - canvas.height / 6, canvas.width, canvas.height / 6);

  // Draw the castle walls
  const wallHeight = 200;
  const wallWidth = 40;
  const numWalls = Math.floor(canvas.width / 4 / wallWidth);

  ctx.fillStyle = '#696969';
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;

  for (let i = 0; i < numWalls; i++) {
    const x = i * wallWidth;
    const y = canvas.height - wallHeight;

    // Draw the wall
    ctx.fillRect(x, y, wallWidth, wallHeight);
    ctx.strokeRect(x, y, wallWidth, wallHeight);
  }
}
