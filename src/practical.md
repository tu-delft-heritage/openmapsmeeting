---
title: Practical information
---

# Practical information

<br>

## Dates

November 5 & 6, 2024

## Location

<div class="grid grid-cols-1" style="grid-auto-rows: 504px;">
  <div class="card" id="map" style="padding: 0">
  </div>
</div>

National Archives & National Library, The Hague<br>
Both are housed in the same complex next to The Hague Central Station

November 5:<br>
<a href="https://www.nationaalarchief.nl/over-het-na/contact/plan-je-bezoek-aan-het-nationaal-archief">National Archives</a>, Fruinzaal<br>
Prins Willem-Alexanderhof 20<br>
2595 BE The Hague<br>

November 6:<br>
<a href="https://www.kb.nl/en/visitors-members/address-and-opening-hours">National Library</a>, Aula<br>
Prins Willem-Alexanderhof 5<br>
2595 BE The Hague<br>

## Organisers

<a href="https://www.tudelft.nl/en/staff/j.a.schoonman/">Jules Schoonman</a><br>
_Digital curator, Academic Heritage, History and Art, TU Delft Library_

<a href="https://www.tudelft.nl/en/staff/v.baptist/">Dr. Vincent Baptist</a><br>
_Assistant professor, History of Architecture and Urban Planning Group, Faculty of Architecture and the Built Environment, TU Delft_

## Partners

National Library<br>
National Archives<br>
KNAW Humanities Cluster

## Costs

The event is free and open to anyone interested. Lunch (for both days), dinner (first day) and drinks (second day) are included.

## Participants

Day 1 has a maximum of 30 participants<br>
Day 2 has a maximum of ~~60~~ 120 participants

```js
import { WarpedMapLayer } from "npm:@allmaps/leaflet@1.0.0-beta.39";

const maps = await FileAttachment("data/maps.json").json();
const mapMonster = await FileAttachment("assets/mapMonster.svg").text();
// const building = await FileAttachment("data/na-kb.geojson").json();

const center = [52.08126724, 4.32712835];

const map = L.map("map", {
  center,
  zoom: 15,
});

// OpenStreetMapLayer
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// See which maps are available in Allmaps API:
// `https://annotations.allmaps.org/maps?limit=25&intersects=${coord.join(",")}`

// const buildingLayer = L.geoJson(building, {
//   style: {
//     color: "#FF56BA",
//     fillColor: "#FFBBE3",
//     fillOpacity: 1,
//   },
//   onEachFeature: (feature, layer) => {
//     const { id, name, address, website } = feature.properties;
//     layer.bindPopup(
//       `<p>
//         <b>${name}</b><br>
//         ${address.join("<br>")}<br>
//         The Netherlands<br>
//         <a href="https://www.openstreetmap.org/${id}">OpenStreetMap</a><br>
//         <a href="${website}">Website</a>
//       </p>`
//     );
//   },
// });

const mapMonsterIcon = L.divIcon({
  html: mapMonster,
  className: "icon",
  iconSize: [100, 100],
});

const mapMonsterMarker = L.marker(center, { icon: mapMonsterIcon })
  .bindPopup(
    `<p>
    <b>National Archives & National Library</b><br>
    Prins Willem-Alexanderhof 5-20<br>
    2595 BE Den Haag<br>
    The Netherlands<br>
  </p>`
  )
  .addTo(map);

const overlays = {};

const makeWarpedMapLayer = async (item) => {
  const attribution = `<a target="_blank" href="${item.url}">${item.collection}</a>`;
  const layer = new WarpedMapLayer(null, {
    attribution,
  });
  const ids = await layer.addGeoreferenceAnnotation(item.annotationData);
  layer.setMapsTransformationType(ids, "thinPlateSpline");
  return layer;
};

const warpedMapLayers = await Promise.all(
  maps.map((item) =>
    makeWarpedMapLayer(item).then((warpedMapLayer) => ({
      ...item,
      warpedMapLayer,
    }))
  )
);

for (const layer of warpedMapLayers) {
  const title = `<b>${layer.year}</b>`;
  overlays[title] = layer.warpedMapLayer;
}

const layerControl = L.control.layers(overlays, null, { collapsed: false });

const getRandomInt = (max) => Math.floor(Math.random() * max);
const index = getRandomInt(maps.length - 1);
const initialLayer = Object.entries(overlays)[index][1];

initialLayer.addTo(map);
layerControl.addTo(map);

// Force initial render...
setTimeout(() => {
  initialLayer._update();
}, "1000");
```

<style>
  .card {
    background: #64C18F;
  }
  .leaflet-container {
    background: #64C18F;
  }
  .icon {
    border: none;
    background: none;
  }
  .control-link {
    > svg {
      height: 15px;
      width: 15px;
    }
  }
</style>
