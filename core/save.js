export function saveGame(game) {
  localStorage.setItem("mayor-save", JSON.stringify(game));
}

export function loadGame(game) {
  const data = localStorage.getItem("mayor-save");
  if (!data) return;

  const saved = JSON.parse(data);
  Object.assign(game.economy, saved.economy);
  game.map.tiles = saved.map.tiles;
}
