<template>
  <div style="height: 93vh">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="center"
      :minZoom="minZoom"
      :maxZoom="maxZoom"
      :maxBounds="maxBounds"
      :zoomAnimation="true"
      :fadeAnimation="true"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-geo-json :geojson="geojson" :options="options" />
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { RepoFactory } from "./../repos/RepoFactory";
const GeoJsonRepo = RepoFactory.get("nodes");
export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  data() {
    return {
      center: [46.6228162, 14.3079604],
      zoom: 16,
      maxZoom: 20,
      minZoom: 13,
      maxBounds: [
        [46.6613, 14.2347],
        [46.5714, 14.405],
      ],
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="http://commean.eu">Commean</a>',
      geojson: [],
      options: {
        onEachFeature: this.onEachFeature
      },
    };
  },
  beforeMount() {
    this.fetch();
    this.disableRightClick();
  },
  methods: {
    async fetch() {
      const { data } = await GeoJsonRepo.get();
      this.geojson = data;
    },
    disableRightClick() {
      document.oncontextmenu = function () {
        return false;
      };
    },
    onEachFeature(feature,layer) {
      layer.bindPopup(feature.properties.name)
    }
  },
};
</script>
