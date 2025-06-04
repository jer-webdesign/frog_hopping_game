let frogIndex = 0; // Frog starting position at top-left

document.addEventListener("keydown", (event) => {
  const tiles = document.querySelectorAll(".tile");
  if (tiles.length !== 16) return;

  let moved = false;

  const x = frogIndex % 4;
  const y = Math.floor(frogIndex / 4);

  switch (event.key) {
    case "ArrowUp":
      if (y > 0) {
        frogIndex -= 4;
        moved = true;
      }
      break;
    case "ArrowDown":
      if (y < 3) {
        frogIndex += 4;
        moved = true;
      }
      break;
    case "ArrowLeft":
      if (x > 0) {
        frogIndex -= 1;
        moved = true;
      }
      break;
    case "ArrowRight":
      if (x < 3) {
        frogIndex += 1;
        moved = true;
      }
      break;
  }

  if (moved) {
    document.querySelector(".frog")?.remove();

    document.querySelectorAll(".lily-pad").forEach(pad => pad.classList.remove("active"));

    const newFrog = document.createElement("div");
    newFrog.classList.add("frog");
    tiles[frogIndex].appendChild(newFrog);

    const lilyPad = tiles[frogIndex].querySelector(".lily-pad");
    if (lilyPad) {
      lilyPad.classList.add("active");
    }
  }
});

