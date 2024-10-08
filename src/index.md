---
title: Open Maps Meeting
toc: false
---

```js
const background = await FileAttachment("assets/background.jpg").href;
d3.select("body").style("background-image", "url(" + background + ")");
```

<img class="banner" src="assets/hero.svg">

<div class="hero">
  <h2>The Open Maps Meeting brings together an international community of geospatial researchers, map curators, open-source developers and other professionals with a love for open data and historical maps</h2>
  <p>November 5 & 6 2024 at the Dutch National Archives and National Library<br>
  Organized by Jules Schoonman and Vincent Baptist (TU Delft)<br>
  Funded by Open Science NL, KNAW Humanities Cluster,<br>
  Stichting Pica and TU Delft.
  </p>
  <p class="orange">More places have become available for day 2!</p>
  <a href="/introduction">Introduction<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
  <a href="/programme">Programme<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
  <a href="/practical">Practical information<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
  <a href="/register">Register<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

<div class="grid grid-cols-3">
  <div class="card"><a href="https://www.openscience.nl/"><img class="logo" src="/assets/opensciencenl.svg"></a></div>
  <div class="card"><a href="https://www.tudelft.nl/"><img class="logo" src="/assets/tudelft.svg"></a></div>
  <div class="card"><a href="https://iiif.io/"><img class="logo" src="/assets/iiif.svg"></a></div>
</div>

<style>

body {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#observablehq-center {
  margin: 0;
  padding: 1rem 2rem;
}

.banner {
  /* border-radius: 0.75rem; */
  /* border: solid 1px var(--theme-foreground); */
  width: 100%;
}

.logo {
  height: 50px;
}

.card {
  text-align: center;
  background: none;
}

.orange {
  color: #FF7415;
  margin-top: 0;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 0rem 0rem 4rem 0rem;
  text-wrap: balance;
  text-align: center;
  & a {
    font-weight: 500;
  }
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 1rem;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
