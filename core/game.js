import { Map } from "./map.js";
import { Economy } from "../systems/economy.js";
import { Time } from "./time.js";
import { loadGame, saveGame } from "./save.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const TILE_SIZE = 32;

export const game = {
  map: new Map(40, 25),
  economy: new Economy(),
  time: new Time(),
};

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.map.draw(ctx);
  game.time.update();
  game.economy.update();

  requestAnimationFrame(loop);
}

loadGame(game);
loop();

setInterval(() => saveGame(game), 5000);
