const data = [
    {
        "title": "Jacob van Deventer, Minuut van de plattegrond van 's-Gravenhage",
        "year": 1550,
        "manifest": "https://service.archief.nl/iipsrv?IIIF=/27/7c/61/6e/6f/a8/4a/03/84/1b/ff/a3/8c/97/09/77/7a5ed42b-8cf8-4f4f-ba5e-4b1221bf326c.jp2/info.json",
        "annotation": "https://annotations.allmaps.org/maps/7eb82f2afeb506d6@232e48592d591a38",
        "collection": "Nationaal Archief",
        "url": "https://www.nationaalarchief.nl/onderzoeken/archief/4.DEF/invnr/1.7/file/NL-HaNA_4.DEF_1.7"
    },
    {
        "title": "'t Hooge Heemraedschap van Delflant",
        "year": "1712",
        "manifest": "https://dlc.services/iiif-resource/7/string1string2string3/1712-kruikius",
        "annotation": "https://annotations.allmaps.org/maps/c042ba90d01f6dd0@387944b87ef79000",
        "collection": "TU Delft Library",
        "url": "https://www.tudelft.nl/library/collecties/kaartenkamer/kaartencollectie/historische-kaarten/kruikiuskaart-1712"
    },
    {
        "title": "S.W. van der Noordaa, Nieuwe Kaart van s' Gravenhage met de omliggende Dorpen en Buitenplaatesen",
        "year": 1852,
        "manifest": "https://service.archief.nl/iipsrv?IIIF=/d3/05/c6/2a/3a/68/4d/d0/8d/af/2e/d7/68/0f/18/b2/df222597-90a3-4724-a043-bfc80c726fed.jp2/info.json",
        "annotation": "https://annotations.allmaps.org/maps/8568d3e122117c6f@1b6a3f80bab2b970",
        "collection": "Nationaal Archief",
        "url": "https://www.nationaalarchief.nl/onderzoeken/archief/4.OBGK/invnr/P16.890/file/NL-HaNA_4.OBGK_P16.890"
    },
    {
        "title": "Smulders, 's-Gravenhage",
        "year": 1879,
        "manifest": "https://cdm21033.contentdm.oclc.org/iiif/krt:1215/manifest.json",
        "annotation": "https://annotations.allmaps.org/maps/37be5d604a0f988f@ba7667937471433b",
        "collection": "Vrije Universiteit",
        "url": "https://digitalecollecties.vu.nl/digital/collection/krt/id/1215"
    },
    {
        "title": "Supplement bij de minuutbladen 439 en 440: correctieblad 's-Gravenhage, 1898",
        "year": 1898,
        "manifest": "https://data.globalise.huygens.knaw.nl/manifests/maps/4.TOPO/A/A7/A7.1/div.nrs.aanvullende-minuutbladen.json",
        "annotation": "https://annotations.allmaps.org/maps/6325db4998c7f13f@2100eb671cb9c4c0",
        "collection": "Nationaal Archief",
        "url": "https://www.nationaalarchief.nl/onderzoeken/archief/4.TOPO/invnr/10.439-440/file/NL-HaNA_4.TOPO_10.439-440_R"
    },
    {
        "title": "Wandelkaart van 's-Gravenhage en omstreken",
        "year": "1905",
        "manifest": "https://objects.library.uu.nl/manifest/iiif/v2/1874-255740",
        "annotation": "https://annotations.allmaps.org/maps/59361d156b277dca@e109c04cd4d71d99",
        "collection": "Utrecht University Library",
        "url": "https://objects.library.uu.nl/reader/index.php?obj=1874-255740&lan=en"
    },
    {
        "title": "Tramgids van 's-Gravenhage",
        "year": "1926",
        "manifest": "https://images.memorix.nl/hga/iiif/73216a2a-9a1b-c711-1c7b-67adfd106f78",
        "annotation": "https://annotations.allmaps.org/maps/a50c244ce62b7fe3@6b595e06095a35e5",
        "collection": "Haags Gemeentearchief",
        "url": "https://haagsgemeentearchief.nl/mediabank/beeldcollectie/detail/e9cce592-7101-aa99-79e4-760ef6acabc5/media/73216a2a-9a1b-c711-1c7b-67adfd106f78"
    },
    {
        "title": "Plattegrond 's-Gravenhage met tram- en buslijnen",
        "year": "1975",
        "manifest": "https://images.memorix.nl/hga/iiif/afff62ea-7439-37ed-f600-7ccb3ed4cb67",
        "annotation": "https://annotations.allmaps.org/maps/9d55ea0c8176b2d4@6183adc21af24185",
        "collection": "Haags Gemeentearchief",
        "url": "https://haagsgemeentearchief.nl/mediabank/beeldcollectie/detail/1365f322-31a2-45e0-895a-ceb046c2e69c/media/afff62ea-7439-37ed-f600-7ccb3ed4cb67"
    }
]

const fetchJson = (url) => fetch(url).then(resp => resp.json())

const dataWithAnnotations = await Promise.all(data.map(i => fetchJson(i.annotation).then(annotationData => ({ ...i, annotationData }))))

process.stdout.write(JSON.stringify(dataWithAnnotations, null, 2));
