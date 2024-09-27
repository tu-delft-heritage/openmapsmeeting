---
title: IIIF Confetti
---

## IIIF Confetti demo

When testing the registration form, I used [canvas-confetti](https://github.com/catdad/canvas-confetti) to confirm the content was posted correctly. (It's an often used example to demonstrate javascript imports, also appearing in the [documentation](https://observablehq.com/framework/imports) of Observable Framework that powers this website). I ended up leaving it in but using the IIIF logo as confetti shapes instead...

This page offers a demo for those who are not able to come to the event and therefore won't register. Feel free to tweak the parameters below and reuse the [code](https://github.com/tu-delft-heritage/openmapsmeeting/blob/main/src/confetti.md?plain=1)!

```js
display(
  Inputs.button("Confetti!", {
    reduce,
  })
);
```

```js
const options = view(
  Inputs.form([
    Inputs.range([10, 500], { step: 1, value: 50, label: "Particles" }),
    Inputs.range([0, 180], { step: 1, value: 90, label: "Angle" }),
    Inputs.range([0.1, 5], { step: 0.1, value: 1, label: "Gravity" }),
    Inputs.range([-10, 10], { step: 1, value: 0, label: "Drift" }),
    Inputs.range([1, 10], { step: 0.5, value: 5, label: "Scalar" }),
    Inputs.range([100, 1000], { step: 1, value: 200, label: "Ticks" }),
    Inputs.range([0, 180], { step: 1, value: 120, label: "Spread" }),
  ])
);
```

_The documentation recommends to calculate the transform matrix of custom shapes only once. I only used three shapes (stem & dot of the first i, and the f) since the confetti rotates and will thus produce the mirrored version as well. Here're the three SVG paths taken from the IIIF logo:_

<code>
${shapes.map(i => html`<p>${i.path}</p>`)}
</code>

You can make a custom shape as follows:

```js run=false
const path = "M 65.2422,2178.75 775.242,1915 773.992,15 65.2422,276.25 v 1902.5"
const shape = confetti.shapeFromPath({ path });
```

```js
import confetti from "npm:canvas-confetti";

// Load shapes from static json
const shapes = await FileAttachment("data/shapes.json").json();

// Options from input
const [particleCount, angle, gravity, drift, scalar, ticks, spread] = options;

// Colors of the IIIF logo
const colors = ["#2873ab", "#ed1d33"];

const reduce = () =>
  confetti({
    particleCount,
    angle,
    gravity,
    drift,
    shapes,
    scalar,
    ticks,
    spread,
    colors,
  });
```