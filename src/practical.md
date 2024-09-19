---
title: Practical information
---

# Practical information

<br>

## Dates

November 5 & 6 2024

## Location

<div class="grid grid-cols-1" style="grid-auto-rows: 504px;">
  <div class="card" id="map" style="padding: 0">
  </div>
</div>

National Archives & National Library, The Hague
Both are housed in the same complex next to The Hague Central Station

November 5:<br>
Fruinzaal<br>
National Archives<br>
Prins Willem-Alexanderhof 20<br>
2595 BE Den Haag<br>
[Website](https://www.nationaalarchief.nl/over-het-na/contact/plan-je-bezoek-aan-het-nationaal-archief)

November 6:<br>
Aula<br>
National Library<br>
Prins Willem-Alexanderhof 5<br>
2595 BE The Hague<br>
[Website](https://www.kb.nl/en/visitors-members/address-and-opening-hours)

## Organisers

Jules Schoonman<br>
Digital curator, Academic Heritage, History and Art, TU Delft Library

Dr. Vincent Baptist<br>
Assistant professor, History of Architecture and Urban Planning Group, Faculty of Architecture and the Built Environment, TU Delft

## Partners

National Library<br>
National Archives

## Costs

The event is free and open to anyone interested. Lunch (for both days), dinner (first day) and drinks (second day) are included.

## Participants

- Day 1: Maximum of 30 participants
- Day 2: Maximum of 60 participants

```js
import { WarpedMapLayer } from "npm:@allmaps/leaflet@1.0.0-beta.39";

const maps = await FileAttachment("data/maps.json").json();
const building = await FileAttachment("data/na-kb.geojson").json();

const coord = [52.08108, 4.3262];

// const div = display(document.createElement("div"));
// div.style = "height: 400px;";

const map = L.map("map");

// .setView(coord, 14);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

const buildingLayer = L.geoJson(building, {
  style: {
    color: "#FF56BA",
    fillColor: "#FFBBE3",
    fillOpacity: 1,
  },
  onEachFeature: (feature, layer) => {
    const { id, name, address, website } = feature.properties;
    layer.bindPopup(
      ` <p>
          <b>${name}</b><br>
          ${address.join("<br>")}<br>
          The Netherlands<br>
          <a href="https://www.openstreetmap.org/${id}">OpenStreetMap</a><br>
          <a href="${website}">Website</a>
        </p>`
    );
  },
}).addTo(map);
// .bindPopup("National Archives.")

map.fitBounds(buildingLayer.getBounds(), { maxZoom: 17 });

// L.marker(coord).addTo(map).bindPopup("National Archives.").openPopup();

// const url = `https://annotations.allmaps.org/maps?limit=25&intersects=${coord.join(
//   ","
// )}`;
// const resp = await fetch(url).then((resp) => resp.json());
// display(resp);

const overlays = new Object();

const makeWarpedMapLayer = async (annotationUrl) => {
  const layer = new WarpedMapLayer(null, {
    attribution: "test",
  });
  const ids = await layer.addGeoreferenceAnnotationByUrl(annotationUrl);
  layer.setMapsTransformationType(ids, "thinPlateSpline");
  return layer;
};

for (const map of maps) {
  overlays[map.title] = new WarpedMapLayer(map.annotation);
}

const getRandomInt = (max) => Math.floor(Math.random() * max);

const index = getRandomInt(maps.length - 1);
const firstLayer = Object.entries(overlays)[index][1];
firstLayer.addTo(map);

const layerControl = L.control.layers(overlays, null).addTo(map);
```

<style>
  .leaflet-container {
    background: #64C18F;
  }
</style>
