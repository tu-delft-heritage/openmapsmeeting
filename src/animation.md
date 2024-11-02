---
title: Tile animation
---

# Tile animation

Background animation to show during the Open Maps Meeting.

The animation loads random [XYZ map tiles](https://en.wikipedia.org/wiki/Tiled_web_map) in a ${rows} by ${columns} grid from the selection of maps shown under [practical information](/practical). The tiles are loaded using [Allmaps Tile Server](https://observablehq.com/@allmaps/allmaps-tile-server).

```js
// https://observablehq.com/@esperanc/full-screen-animation
const fullScreen = (element) => {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
};

display(
  Inputs.button("Full screen", {
    reduce: () => fullScreen(canvas),
  })
);
```

<canvas id="canvas"></canvas>

To customize the animation, see this [Observable Notebook](https://observablehq.com/d/e3ee41bd08b20eca).

```js
// Input and settings
const maps = await FileAttachment("data/maps.json").json();
const topLeftTile = [16770, 10807, 15];
const rows = 9;
const columns = 16;
const timeOut = 3; // Seconds
const tileSize = 256;
const canvasFill = "black";
```

```js
// Set up canvas
const canvas = document.getElementById("canvas");
const canvasWidth = tileSize * columns;
const canvasHeight = tileSize * rows;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");
ctx.fillStyle = canvasFill;
ctx.fillRect(0, 0, canvasWidth, canvasHeight);
```

```js
// Calculate tiles
const getTiles = () => {
  const [x, y, z] = topLeftTile;
  const tiles = new Array();
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      tiles.push({
        x: x + column,
        y: y + row,
        z,
        dx: column * tileSize,
        dy: row * tileSize,
      });
    }
  }
  return tiles;
};
const tiles = getTiles();
```

```js
const tileSource = maps.map(
  (i) =>
    "https://allmaps.xyz/maps/" +
    i.annotation.split("/").pop().split("@").shift()
);
const getTileUrl = (tile, index) => {
  return (
    tileSource[index] + "/" + tile.z + "/" + tile.x + "/" + tile.y + ".png"
  );
};

const gridCells = columns * rows;
const chunkSize = Math.ceil(gridCells / tileSource.length);

const createChunks = (arr) => {
  let chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};

const shuffleCanvas = async () => {
  const ctx = canvas.getContext("2d");

  const shuffledTiles = tiles
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const tilesInChunks = createChunks(shuffledTiles);

  for (let i = 0; i < tilesInChunks.length; i++) {
    const chunk = tilesInChunks[i];
    const tilesWithBitmaps = chunk.map((tile, index) =>
      fetch(getTileUrl(tile, i))
        .then((resp) => resp.blob())
        .then((blob) => createImageBitmap(blob))
        .then((bitmap) => ({ ...tile, bitmap }))
    );

    for await (const tile of tilesWithBitmaps) {
      let start;
      function fadeIn(timestamp) {
        if (start === undefined) {
          start = timestamp;
        }
        const elapsed = timestamp - start;
        const alpha = 0.0001 * elapsed;
        ctx.globalAlpha = alpha;
        ctx.drawImage(tile.bitmap, tile.dx, tile.dy, tileSize, tileSize);
        if (alpha < 1) {
          requestAnimationFrame(fadeIn);
        } else {
          tile.bitmap.close();
        }
      }
      requestAnimationFrame(fadeIn);
    }

    await new Promise((r) => setTimeout(r, timeOut * 1000));
  }
  shuffleCanvas();
};
shuffleCanvas();
```

<style>
#canvas {
  width:100%;
  border-radius: 0.75rem;
}
#canvas:fullscreen {
  background-color: black;
  border-radius: unset;
}
<style>
