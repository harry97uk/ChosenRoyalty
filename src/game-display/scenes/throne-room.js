import { setScene } from "../game-interface/game-interface.js";

// Render the king's throne room
export function renderThroneRoom() {
  setScene(1)
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Create linear gradient for the background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#F8F8FF'); // Light blue
  gradient.addColorStop(1, '#000080'); // Dark blue
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the walls
  ctx.fillStyle = '#8B4513'; // Brown
  ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);

  // Draw the throne
  ctx.fillStyle = '#CD853F'; // Brown
  ctx.fillRect(200, 200, 400, 250);

  // Draw decorative elements with gradients
  const bannerGradient = ctx.createLinearGradient(0, 0, 0, 200);
  bannerGradient.addColorStop(0, '#800080'); // Purple
  bannerGradient.addColorStop(1, '#4B0082'); // Indigo

  ctx.fillStyle = bannerGradient;
  ctx.fillRect(100, 150, 50, 200);
  ctx.fillRect(650, 150, 50, 200);

  const artworkGradient = ctx.createLinearGradient(0, 0, 0, 100);
  artworkGradient.addColorStop(0, '#C0C0C0'); // Silver
  artworkGradient.addColorStop(1, '#A9A9A9'); // Dark Gray

  ctx.fillStyle = artworkGradient;
  ctx.fillRect(200, 100, 400, 100);

  const floorGradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
  floorGradient.addColorStop(0, '#8B4513'); // Brown
  floorGradient.addColorStop(1, '#D2691E'); // Chocolate

  ctx.fillStyle = floorGradient;
  ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

  // Draw the king character
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  // Body
  ctx.fillStyle = '#FF0000'; // Red
  ctx.fillRect(350, 300, 100, 200);

  // Crown
  ctx.fillStyle = '#FFD700'; // Gold
  ctx.beginPath();
  ctx.moveTo(350, 220);
  ctx.lineTo(400, 150);
  ctx.lineTo(450, 220);
  ctx.lineTo(410, 220);
  ctx.lineTo(400, 190);
  ctx.lineTo(390, 220);
  ctx.lineTo(350, 220);
  ctx.closePath();
  ctx.fill();

  // Face
  ctx.fillStyle = '#F0DC82'; // Light Goldenrod Yellow
  ctx.beginPath();
  ctx.arc(400, 270, 40, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  // Eyes
  ctx.fillStyle = '#000000'; // Black
  ctx.beginPath();
  ctx.arc(385, 260, 5, 0, Math.PI * 2, false);
  ctx.arc(415, 260, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  // Beard
  ctx.strokeStyle = '#000000'; // Black
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(400, 280);
  ctx.lineTo(400, 320);
  ctx.stroke();

  // Robe
  ctx.fillStyle = '#800000'; // Maroon
  ctx.fillRect(350, 500, 100, 200);
}
