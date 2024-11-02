---
title: tldraw
---

# tldraw

Below is a [tldraw](https://tldraw.dev/) canvas to use for the afternoon sessions on November 5.

You can edit it in a new window by following <a target="blank" href="https://www.tldraw.com/r/HOX5DzG7qELCCX4nPz5Dw">this link</a>.

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

const iframe = document.getElementById("iframe");

display(
  Inputs.button("Full screen", {
    reduce: () => fullScreen(iframe),
  })
);
```

<!-- View: https://www.tldraw.com/ro/h0YxanK6hDN_7m4k5PqHv -->
<!-- Edit: https://www.tldraw.com/r/HOX5DzG7qELCCX4nPz5Dw -->
<iframe id="iframe" src="https://www.tldraw.com/ro/h0YxanK6hDN_7m4k5PqHv"></iframe>

<style>
#iframe {
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 0.75rem;
}
</style>
