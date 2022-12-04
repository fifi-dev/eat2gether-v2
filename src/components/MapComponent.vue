<template>
    <div class="map-component">
        <div>
            <l-map
            :center="center"
            :zoom="zoom"
            class="map shadow-md"
            ref="map"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @ready="onReady" 
            @locationfound="onLocationFound"
            >
                <l-tile-layer
                    :url="url"
                >
                </l-tile-layer>
                <!-- <v-marker-cluster
                ref="cluster"
                :averageCenter="true"
                :ignoreHidden="true"
                :options="clusterOptions"
                > -->
                <MarkerComponent
                v-for="marker in markers"
                :key="marker.id"
                :marker="marker"
                />
                <LRoutingMachine :waypoints="waypoints"/>
                <!-- </v-marker-cluster>-->
                <!-- <template v-if="location">
                    <l-circle-marker :lat-lng="location.latlng" :fillOpacity="1" :radius="10" />
                    <l-circle-marker :lat-lng="location.latlng" :radius="location.accuracy/2" :stroke="false" />
                </template> -->
            </l-map>
        </div>
    </div>
</template>

<script>
//import Vue from 'vue';
//import { Icon } from 'leaflet';
import { LMap, LTileLayer,  } from 'vue2-leaflet';
import MarkerComponent from './MarkerComponent.vue';
import LRoutingMachine from './LRoutingMachine.vue';

import { supabase } from '../supabase';
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';


//va permettre de reduire le nombre de marquers si il y a beaucoup
//import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
//import ClusterIcon from './ClusterIcon'
/*
const EnhancedClusterIcon = Vue.extend(ClusterIcon);

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})*/

export default {
    name: 'MapComponent',
    components: {
    LMap,
    LTileLayer,
    MarkerComponent,
    Snack,
    LRoutingMachine,
    //LCircleMarker,
    //'v-marker-cluster': Vue2LeafletMarkerCluster
    },
    data () {
        return {
            //intagration de openstreetmap
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [ 48.894475798091705, 2.2265510931325125 ],
            zoom: 16,
            markers: [
               /* //pb
                {id: 1, name: 'PB Poulet Braisé', iconUrl: require('../assets/img/restaurant_marker.png'), coordinates: [ 48.8951916533519, 2.2230104684596537 ], review : this.$myGlobalStuff.message },
                //mcdo
                {id: 2, name: 'McDo', iconUrl: require('../assets/img/restaurant_marker.png') ,coordinates: [ 48.89149774910227, 2.2371447587511417 ], review : 'Mcdo'},
                //franprix
                {id: 4, name: 'Franprix', iconUrl: require('../assets/img/restaurant_marker.png'), coordinates: [ 48.89632970183085, 2.2226684782269883 ], review : 'Barquette de poulet et patates entre 2 et 5'},
                //yummy jap
                {id: 5, name: 'Yummy', iconUrl: require('../assets/img/restaurant_marker.png'), coordinates: [ 48.89538093649458, 2.2241467120671445 ], review : 'Restaurant japonais'},
                //Yankee Burger
                {id: 6, name: 'Yankee Burger', iconUrl: require('../assets/img/restaurant_marker.png'), coordinates: [ 48.89442819193548, 2.222982395467637 ], review : 'Des burgers'},*/
                //IIM
                {id: 7, name: 'IIM', iconUrl: require('../assets/img/meet_marker.png'), coordinates: [ 48.89374094854599, 2.227000322624023 ], review : 'Institut de l Internet et du Multimédia'},
            ],
            localization: '',
            sLocalization : null,
            userInfo: {},
            restaurant: {},
            userLat: '',
            userLon: '',
            userRestoId: null,
            waypoints : [
            { lat: null, lng: null},
            { lat: null, lng: null },
            ],
            /*clusterOptions: {
                spiderfyDistanceMultiplier: 3,
                iconCreateFunction: cluster => {
                    let clusterUsers = cluster.getAllChildMarkers().map(marker => marker.id)
                    let clusterIconEl = new EnhancedClusterIcon({propsData: { clusterUsers }}).$mount().$el
                    return divIcon({
                        html: clusterIconEl.outerHTML,
                        className: 'cluster',
                        iconSize: null
                    })
                }
            }*/
        }
    },
    mounted() {
        this.markers.push({
        id: 8, 
        name: 'Corcoran La Défense-Nanterre', 
        iconUrl: require('../assets/img/restaurant_marker.png'), 
        coordinates: [ 48.8945223599153, 2.227069848985373 ], 
        review : 'Bar test'
    })
    this.UserInfo();
    //console.log("New data : " + this.markers);
    },
    methods: {
    ...mapActions({
        snack: 'snack/snack',
    }),
    zoomUpdated (zoom) {
        this.zoom = zoom;
        //console.log(this.markers)
    },
    centerUpdated (center) {
        this.center = center;
        //console.log(this.$myGlobalStuff)
    },
    onReady() {
            this.map = this.$refs["map"].mapObject;
            this.map.locate()
            //Si on souhaite recupérer la position tous les 3 secondes
            //setInterval(this.map.locate(), 3000);
        },
        
    onLocationFound(l) {
        //console.log(l);
        
        this.userLat = l.latitude;
        this.userLon = l.longitude;
        this.localization =  "[ " + this.userLat + "," + this.userLon + " ]";
        this.sLocalization = [ this.userLat, this.userLon ];
        console.log(" Ta latitude : " + this.localization[0])
        console.log("localisation : " + this.localization);
        console.log("localisation spéciale: " + this.sLocalization);
        //On ajoute un marqueur
        /*this.markers.push({
        id: 9, 
        name: 'Ma position actuelle', 
        iconUrl: require('../assets/img/green_uMarker.png'), 
        coordinates: [ l.latitude, l.longitude ], 
        review : 'test affichage'
        });*/
        this.updatePos();
    },
    async UserInfo() {
        let user = await supabase.auth.user();
        const { data, error } = await this.$supabase
            .from('users')
            .select()
            .match({ auth_id: user.id })
            .single();
        if (data) {
            this.userInfo = data;
            console.log("nom: " + this.userInfo.first_name);
            //On ajoute un marqueur
            this.markers.push({
            id: 9, 
            name: this.userInfo.first_name, 
            iconUrl: this.userInfo.iconUrl, 
            coordinates: [ this.userInfo.sLocalization[0], this.userInfo.sLocalization[1] ], 
            review : this.userInfo.first_name, 
            });
            this.userRestoId = this.userInfo.restaurant_id;
            this.useResto();
        } else {
            this.snack(error);
        }
    },
    async updatePos() {
        let user = await supabase.auth.user();
        const { data } = await this.$supabase
        .from('users')
        .update({
            localization : this.localization,
            sLocalization : this.sLocalization,
        })
        .match({ auth_id: user.id });
        if (data) {
            this.snack('User Pos updated !');
            this.waypoints[0].lat = this.userLat;
            this.waypoints[0].lng = this.userLon;
        } else {
            this.snack(error);
        }
    },
    async useResto() {
        const { data, error } = await this.$supabase
        .from('restaurants')
        .select()
        .match({ id: this.userRestoId })
        .single();
        if(data){
            this.restaurant = data;
            //On ajoute un marqueur
            this.markers.push({
            id: Math.random(), 
            name: this.restaurant.name, 
            iconUrl: this.restaurant.iconUrl, 
            coordinates: [ this.restaurant.s_coordiantes[0], this.restaurant.s_coordiantes[1] ], 
            review : this.restaurant.review, 
            });
            console.log("bravo");
            this.waypoints[1].lat = this.restaurant.s_coordiantes[0];
            this.waypoints[1].lng = this.restaurant.s_coordiantes[1];
        }else{
            console.log(error)
        }
    }

    }
}
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";

.map-component{
width: 60% !important;

}
.map {
position: absolute;
width: 70% !important;
margin-top: 0%;
height: 90% !important;
overflow :hidden;
z-index: 5;
}

.cluster {
    position: absolute;
    margin-left: -20px;
    margin-top: -20px;
}

</style>