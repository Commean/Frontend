<template>
<div style="height: 93vh">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="center" :minZoom="minZoom" :maxZoom="maxZoom" :maxBounds="maxBounds" :zoomAnimation="true" :fadeAnimation="true">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-geo-json :geojson="geojson" :options="options" />
    </l-map>
    <div id="test">Hi</div>
</div>
</template>

<script>
import {
    LMap,
    LTileLayer,
    LGeoJson
} from "@vue-leaflet/vue-leaflet";
//import NodeInfo from "./components/NodeInfo.vue";
import Popup from "./Popup.vue";
import {
    createApp
} from "vue";
import "leaflet/dist/leaflet.css";
import {
    RepoFactory
} from "./../repos/RepoFactory";

const GeoJsonRepo = RepoFactory.get("nodes");
const NodeInfoRepo = RepoFactory.get("nodeInfo");
export default {
    name: "TrafficMap",
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        // NodeInfo,
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
            //url: "http://tiles.lumi200.at/hot/{z}/{x}/{y}.png",
            url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="http://commean.eu">Commean</a>',
            geojson: null,
            options: {
                onEachFeature: this.onEachFeature,
            },
        };
    },
    beforeMount() {
        this.fetchGeoJson();

        // Disable right click on map
        document.oncontextmenu = function () {
            return false;
        };
    },
    methods: {
        async fetchGeoJson() {
            try {
                const {
                    data
                } = await GeoJsonRepo.get();
                this.geojson = data;
            } catch (error) {
                if (error.response) {
                    this.$swal.fire({
                        icon: "error",
                        title: "API error",
                        text: error.response.data.message,
                    });
                } else {
                    this.$swal.fire({
                        icon: "error",
                        title: "No response from Server",
                        text: "The server could not be reached",
                    });
                }
            }
        },

        onEachFeature(feature, layer) {
            layer.bindPopup(`<div id=data><p>Waiting for data from Node:\n${feature.id}</p></div>`, {
                maxWidth: "400",
                width: "200",
                className: "custom-popup",
            });

            layer.on("click", async function () {
                const {
                    data
                } = await getData(feature.id);
                console.log(data)
                createApp(
                    Popup, {
                        data: data
                    }).mount(`#data`)

                //layer.setPopupContent('<div id="test"></div>');
            });
        },

    }
};

async function getData(id) {
    return await NodeInfoRepo.getNodeInfo(id);
}
</script>
