import { TILE_SIZE } from "./game.js";
import { game } from "./game.js";

export class Map {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.tiles = [];

    for (let y = 0; y < h; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < w; x++) {
        this.tiles[y][x] = { type: "empty" };
      }
    }

    window.addEventListener("click", e => this.handleClick(e));
  }

  handleClick(e) {
    const x = Math.floor(e.clientX / TILE_SIZE);
    const y = Math.floor(e.clientY / TILE_SIZE);

    if (!this.tiles[y] || !this.tiles[y][x]) return;

    if (game.economy.money < 100) return;

    this.tiles[y][x].type = "house";
    game.economy.money -= 100;
  }

  draw(ctx) {
    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        const tile = this.tiles[y][x];
        ctx.fillStyle = this.color(tile.type);
        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  color(type) {
    return {
      empty: "#444",
      house: "#4caf50",
      road: "#999"
    }[type] || "#000";
  }
}
