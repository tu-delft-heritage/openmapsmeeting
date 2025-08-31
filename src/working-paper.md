---
title: "Open Maps: New Research Directions and Workflows for Digitized Historical Cartographic Material"
---

# Open Maps

## New Research Directions and Workflows for Digitized Historical Cartographic Material

Vincent Baptist, Jules Schoonman  
(Delft University of Technology, organizers Open Maps Meeting)

_This working paper is an outcome of the first international Open Maps Meeting, organized in November 2024 at the Dutch National Archives and National Library, and funded by Open Science NL, KNAW Humanities Cluster, Stichting Pica and Delft University of Technology. It synthesizes general insights from the Open Maps Meeting in a first introductory overview, intended for a broad scholarly audience interested in methodological geospatial, cartographic and historical mapping advancements. The current version of this working paper is based on input from the expert session presentations during the event’s first day. Following further input from the event contributors of day 1 (listed below), a next version of this working paper will be released and further disseminated._

Contributors to the expert session:

- Thomas Vermaut (KNAW Humanities Cluster)
- Mariëlle Veldhuis (KNAW Humanities Cluster)
- Rombert Stapel (International Institute of Social History, KNAW Humanities Cluster)
- Martijn Meijers (Delft University of Technology)
- Katherine McDonough (Lancaster University, Alan Turing Institute)
- Rosie Wood (Alan Turing Institute)
- Kalle Westerling (Alan Turing Institute)
- Leon van Wissen (University of Amsterdam, Huygens Institute)
- Christophe Verbruggen (Ghent University, CLARIAH-VL)
- Iason Jongepier (Antwerp University, National Archives of Belgium)

## Introduction

Over the past decades, large-scale digitization efforts of historical sources by cultural heritage institutions such as archives, libraries and museums, and international research consortia have fundamentally changed the possibilities and playing field for humanities-based research. Digital humanities has become an institutionalized term, with digital availability of source material guiding the way for posing new research questions in tandem with developing novel research methods. Digital humanities’ focus on increased source availability and methodological innovation has fostered new conceptions of doing research: terms such as distant reading and viewing, and deep mapping denote scholars’ engagement with big historical data of which the scale, heterogeneity and previous incompatibility now call for fundamental computational approaches.

In this context, spatial humanities and spatial history have been rapidly developing. The digital turn has fostered a spatial one, as maps, plans and related cartographic sources have become more easily and widely available. Simultaneously, GIS tools and techniques have become more commonly used in humanities research, for the processing, analysis and subsequent presentation and dissemination of historical maps. With GIS, historical maps are often being used to vectorize topographic and geospatial features appearing on the original source material. As raster maps, digitized historical maps are frequently used as base layers onto which other layers of geospatial information can be overlaid.

The vectorization and layering approaches common to GIS have resulted in many research endeavors extracting and aggregating information from varied archival sources, to subsequently link and project the obtained data onto historical maps. Gazetteers and address books are some of the source types most commonly used in this respect, while cadastral maps and city atlases have provided the base layers for large-scale mapping projects, such as the Dutch HisGIS initiative. The potential of large-scale data extraction combined with geospatial mapping has previously prompted visions of establishing ‘[time machines](https://www.timemachine.eu/)’ across Europe, for historical urban contexts with rich archival documentation, from Venice and Amsterdam to Paris. These constitute efforts to **_reconstruct_** the past, or at least parts and layers of its complexity, based on historical material. In addition, the scaling up of data extraction from structured historical sources, and the automation of vectorization and related GIS processes, have become focal research points in their own right.
The vectorization and layering approaches common to GIS have resulted in many research endeavors extracting and aggregating information from varied archival sources, to subsequently link and project the obtained data onto historical maps. Gazetteers and address books are some of the source types most commonly used in this respect, while cadastral maps and city atlases have provided the base layers for large-scale mapping projects, such as the Dutch HisGIS initiative. The potential of large-scale data extraction combined with geospatial mapping has previously prompted visions of establishing ‘[time machines](https://www.timemachine.eu/)’ across Europe, for historical urban contexts with rich archival documentation, from Venice and Amsterdam to Paris. These constitute efforts to **reconstruct** the past, or at least parts and layers of its complexity, based on historical material. In addition, the scaling up of data extraction from structured historical sources, and the automation of vectorization and related GIS processes, have become focal research points in their own right.

## HisGIS: Vectorizing Maps

[HisGIS](https://hisgis.nl/) is a large-scale research and citizen science initiative to digitize and disseminate the oldest Dutch cadaster. Initially set up at the Fryske Akademy in the Netherlands, the HisGIS project and infrastructure are currently run at the KNAW Humanities Cluster and the International Institute of Social History. HisGIS offers a research infrastructure that aims to provide full access to the Dutch historical cadaster of 1832\. The original source material comprises a large set of maps with associated cadastral registration data.

The cadastral parcel is used as the main ‘atom of space’ around which HisGIS’ digitization efforts are set up. Parcels on the original maps are digitally vectorized and linked to transcribed registry data, with the help of a volunteer community. The resulting HisGIS base layers are being used in various research projects, such as the [Amsterdam Time Machine](https://www.amsterdamtimemachine.nl/) project, to connect other geospatial data layers to. A main challenge in the HisGIS project is that of managing scalability: the approximately 15.000 maps comprise around 3 million cadastral parcels, spread across about 140.000 register pages, of which the data availability and quality depends across provinces and cities.

_Figure 1: Example of vectorized cadastral map from HisGIS overlaid on OpenStreetMap_

In order for digitized historical maps to be meaningfully used and linked to the geographical areas they depict, map pixels need to be connected to and placed in a coordinate system. This process is called georeferencing, during which control points are identified and established between map images and modern map base layers, such as OpenStreetMap. When the vectorized HisGIS maps are georeferenced, the historical cadastral depictions spatially correspond with modern maps of the Netherlands. Until recently, georeferencing was most often done through built-in GIS software functionalities or with online web services. In both cases, a new, georeferenced map file would get produced for personal use.

However, such workflows raise various issues and inefficiencies, particularly from Open Science perspectives, namely: 1\) personal software or web accounts are needed for this way of working; 2\) different researchers run the risk of georeferencing the same map sources independently from one another; 3\) the georeferencing process results in files for personal download and storage, which get duplicated when shared further; and 4\) scalability issues arise in situations when numerous, related maps need to be georeferenced together. To tackle such issues, and similar ones related to map presentation, the open-source platform Allmaps has recently been developed at TU Delft Library, based on the open data standards of IIIF.

[IIIF](https://iiif.io/), or the International Image Interoperability Framework, is a set of open data standards and models to enhance access and presentation of digital objects, such as map image files. IIIF is developed by a global community of data curators, developers, researchers, and cultural institutions. IIIF helps overcome the scatteredness and duplication of digital objects by producing ‘manifests’ or digital blueprints of source material, with which to anchor their specific features. An important piece of information to **_present_** historical maps in particular is metadata on their georeferencing, linking map images to geographic coordinates. With recent developments in spatial humanities and new initiatives such as Allmaps, IIIF has adopted a georeference extension for its manifests. The result is that historical maps can now be georeferenced and displayed directly in web browsers, when using the IIIF-based Allmaps resources, instead of map files needing to be duplicated and stored independently of one another.

---

## Allmaps: Georeferencing Maps

[Allmaps](https://allmaps.org/) is an open-source project, built up around the open data standards of IIIF, to provide better access, presentation and exploration of digitized maps. It has been set up and hosted at TU Delft Library, and among others follows from previous map digitization and exploration efforts at the New York Public Library. Allmaps provides a web environment in which IIIF-backed maps and other cartographic material can be showcased and further disseminated. To stimulate a new, open workflow for georeferencing maps, Allmaps provides a step-by-step process to select map images, establish map control points, and display the resulting georeferenced maps in the browser, with direct links to the original image sources.

Allmaps also allows to work with and display larger historical map series. Similar to large-scale processes of vectorization, simultaneously georeferencing and digitally presenting a collection of hundreds or thousands of maps raises issues on how to automate these processes. A new software, MapEdge, has recently been developed in relation to Allmaps, which focuses on automatic detection of the lines and coordinates of map sheet corners. In this process, the sheet index of historical map series, which describes a map series’ original order and logic, becomes an indispensable piece of information. Linked to the Allmaps platform, technical innovations such as MapEdge currently stimulate new projects. One is the development of a ‘Watertijdreis’ with the Cultural Heritage Agency of the Netherlands, a twin version of the Dutch [Topotijdreis](https://www.topotijdreis.nl/) platform built up around national water and river map series.

_Figure 2: Impression of georeferenced Dutch Waterstaatskaart series in Allmaps Viewer_

With historical maps and map series becoming digitally available in better and easier ways, researchers can now also focus more on investigating historical map content itself. The digital developments sketched out so far give an impulse to **_analyze_** historical map content in more encompassing ways. Going beyond viewing and browsing, digitized maps can serve as research data in their own right. This stimulates endeavors to **_identify and annotate_** what is depicted and presented on maps. Supported by computer vision and machine learning principles, findings can then also be extrapolated to larger collections of source material. One of the initiatives taking the lead in this line of research is the MapReader project.

---

## MapReader: Annotating Maps

[MapReader](https://github.com/maps-as-data) is an open-source Python-based, and IIIF-supporting, set of computer vision pipelines, with which large amounts of map images can be analyzed. Originally started in the context of the [Living with Machines](https://livingwithmachines.ac.uk/) project, it has since been developed by scholars at the Alan Turing Institute and Lancaster University. MapReader provides a workflow that allows to divide imported map collections into smaller units or ‘patches’. These smaller cartographic elements can subsequently be annotated according to the presence or absence of particular visual features, e.g. whether train rails are present or not on selected map patches. Based on this initial annotation process, machine learning algorithms built into the MapReader pipeline can be trained to **_predict and classify_** entire map collections. With this workflow, MapReader enables the discovery of patterns across maps, as its project team has for instance done for early railroad infrastructure across the UK. Most recently, MapReader has been expanded with another pipeline that specifically focuses on text recognition on maps.

_Figure 3: Example of ‘railspace’ map patches annotated with MapReader_

The ways in which computer vision and machine learning principles help expand analytical processes across large map collections can unlock the true research potential of source material. At the same time, it also comes with new epistemological trade-offs for researchers: elements of uncertainty are introduced in a workflow such as MapReader’s, which can feel rather uneasy from traditional historical research perspectives. How precise and accurate do large-scale classifications of map fragments need to be, to base sound research results on? How much analytical certainty is enough, from a humanistic perspective?

Apart from such interpretative trade-offs, increased digital availability, presentation and analysis of historical maps also introduces new opportunities to **_integrate and collaborate_** on holistic, multi-tool workflows and multi-source projects. New, historically oriented research projects can be envisioned that bring all the highlighted methodological and technical advancements into practice, around previously unexplored, inaccessible or incompatible archival sources. Two recent projects that illustrate this potential are the Dutch GLOBALISE project, centered on UNESCO-listed colonial archival sources, and the Belgian Artemis project, linked to the broader digital humanities research infrastructure of [CLARIAH](https://clariahvl.hypotheses.org/).

---

## Project Highlight I: GLOBALISE

Centered at the Huygens Institute, [GLOBALISE](https://globalise.huygens.knaw.nl/) aims to further unlock the accessibility and research potential of the Dutch East India Company (VOC) archives. Its vast amounts of source material have the potential to provide new insights on early historical stages of colonialism and globalisation. Researchers and developers on the project have among others enhanced the access to 5000 archival maps that depict colonized territories. Following IIIF standards, maps have been georeferenced through Allmaps. Text and iconographic elements on the maps have among others been identified and annotated with MapReader. The resulting data are made accessible as open datasets, for other researchers outside of GLOBALISE to work with as well.

_Figure 4: Impression of georeferenced map and detected cartographic iconography from GLOBALISE project_

## Project Highlight II: Artemis

[Artemis](https://www.ghentcdh.ugent.be/projects/artemis-advanced-research-tools-environmental-studies-historical-maps-scheldt-valley) is a collaboration between the universities of Ghent and Antwerp around the pre-modern environmental history of the river Scheldt’s valley and surrounding wetlands. The project’s main archival sources comprise a large number of historical maps that detail the evolution and planning of this landscape, and can provide insights on historical water and biodiversity management. Artemis comprises an intricate project infrastructure and workflow, which among others includes incorporation of existing cadastral and GIS datasets, large-scale georeferencing of maps through Allmaps, and crowdsourcing annotation initiatives, among others with the IIIF-supporting [Madoc](https://madoc.digirati.com/) platform.

_Figure 5: Overview of Artemis’ project infrastructure pipelines_

## Conclusion

To conclude, **_new workflows_** for digitized historical cartographic material:

- focus on large-scale extraction of information from archival sources, both map collections themselves and related material;
- aim to automate mapping processes, such as vectorization, georeferencing and annotation of maps;
- increasingly adhere to open data standards such as IIIF, enabling more efficient, sustainable and open access and storage of map sources and their metadata;
- and often start from smaller, compartmentalized cartographic elements, such as map patches and fragments, in order to handily analyze large-scale map collections;

while **_new research directions_** comprise:

- new topics and themes resulting from the linking and aggregating of previously scattered or incompatible sources;
- renewed focuses on well-known source material, with an extensive temporal or spatial reach that now becomes more graspable for proper analysis;
- a focus on (re)discovering new cartographic patterns and trends over time, be it related to local geographic developments or universal cartographic evolutions, for instance related to the stylometry of maps;
- and possibilities that extend beyond historical maps and to other cartographic sources, such as aerial photography, satellite and drone imagery, and other material related to the fields of earth sciences, geodesy and engineering, to which spatial humanities and history can become more closely linked.

## References for Further Reading

- Chen, Yizi, Joseph Chazalon, Edwin Carlinet, Minh Ôn Vũ Ngoc, Clément Mallet and Julien Perret. “Automatic Vectorization of Historical Maps: A Benchmark.” _PLoS One_ 19.2 (2024): 1-23. [https://doi.org/10.1371/journal.pone.0298217](https://doi.org/10.1371/journal.pone.0298217).
- Di Lenardo, Isabella, Raphaël Barman, Albane Descombes and Frédéric Kaplan. “Repopulating Paris: Massive Extraction of 4 Million Addresses from City Directories between 1839 and 1922.” _Digital Humanities Conference, Utrecht_, _2019\._ [https://doi.org/10.34894/MNF5VQ](https://doi.org/10.34894/MNF5VQ).
- Hosseini, Kasra, Daniel C. S. Wilson, Kaspar Beelen and Katherine McDonough. “MapReader: A Computer Vision Pipeline for the Semantic Exploration of Maps at Scale.” _GeoHumanities ‘22: Proceedings of the 6th ACM SIGSPATIAL International Workshop on Geospatial Humanities, Seattle, 2022\._ Eds. L. Moncla, B. Martins and K. McDonough. New York: Association for Computing Machinery, 2022\. 8-19. [https://doi.org/10.1145/3557919.3565812](https://doi.org/10.1145/3557919.3565812).
- McDonough, Katherine, Kaspar Beelen, Daniel C. S. Wilson and Rosie Wood. “Reading Maps at a Distance: Texts on Maps as New Historical Data.” _Imago Mundi_ 76.2 (2024): 296-307. [https://doi.org/10.1080/03085694.2024.2453336](https://doi.org/10.1080/03085694.2024.2453336).
- Meijers, Martijn, and Jules Schoonman. “Mapping the Edge: A Novel Approach to Georeferencing Historical Map Series.” _International Cartographic Association, Commission on Cartographic Heritage into the Digital, 18th ICA Conference Digital Approaches to Cartographic Heritage, Bologna, 2024_. Eds. A. Tsorlini and C. Boutoura. Thessaloniki: CartoGeoLab, 2024\. 268-280. [https://www.gdmc.nl/publications/2024/GeorefHistMapSeries.pdf](https://www.gdmc.nl/publications/2024/GeorefHistMapSeries.pdf).
- Noordegraaf, Julia, Marieke van Erp, Richard Zijdeman, Mark Raat, Thunnis van Oort, Ivo Zandhuis, Thomas Vermaut, Hans Mol, Nicoline van der Sijs, Kristel Doreleijers, Vincent Baptist, Charlotte Vrielink, Brenda Assendelft, Claartje Rasterhoff and Ivan Kisjes. “Semantic Deep Mapping in the Amsterdam Time Machine: Viewing Late 19th- and Early 20th-Century Theatre and Cinema Culture through the Lens of Language Use and Socio-Economic Status.” _Research and Education in Urban History in the Age of Digital Libraries (UHDL), Dresden, 2019_. Eds. F. Niebling, S. Münster and H. Messemer. Cham: Springer, 2021\. 191-212. [https://doi.org/10.1007/978-3-030-93186-5_9](https://doi.org/10.1007/978-3-030-93186-5_9).
- Petitpierre, Remi, Johannes H. Uhl, Isabella di Lenardo and Frédéric Kaplan. “A Fragment-Based Approach for Computing the Long-Term Visual Evolution of Historical Maps.” _Humanities and Social Sciences Communications_ 11 (2024): 1-18. [https://doi.org/10.1057/s41599-024-02840-w](https://doi.org/10.1057/s41599-024-02840-w).
- Rhodes, Joshua, Jon Lawrence, Kaspar Beelen, Katherine McDonough and Daniel C. S. Wilson. “Beyond the Tracks: Re-Connecting People, Places and Stations in the History of Late-Victorian Railways.” _Living with Machines: Computational Histories of the Age of Industry_. Eds. R. Ahnert, E. Griffin and J. Lawrence. London: University of London Press, 2025 \[Pre-review version\]. [https://doi.org/10.14296/xdyp6338](https://doi.org/10.14296/xdyp6338).
- Uhl, Johannes H., and Weiwei Duan. “Automating Information Extraction from Large Historical Topographic Map Archives: New Opportunities and Challenges.” _Handbook of Big Geospatial Data_. Eds. M. Werner and Y.-Y. Chiang. Cham: Springer, 2021\. 509-522. [https://doi.org/10.1007/978-3-030-55462-0_20](https://doi.org/10.1007/978-3-030-55462-0_20).
- Van Wissen, Leon, Manjusha Kuruppath and Lodewijk Petram. “Unlocking the Research Potential of Early Modern Dutch Maps.” _European Journal of Geography_ 16.1 (2025): 12-17. [https://doi.org/10.48088/ejg.si.spat.hum.l.wis.12.17](https://doi.org/10.48088/ejg.si.spat.hum.l.wis.12.17).
