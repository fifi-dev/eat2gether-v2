<template>
    <div class="room flex wrap bg-white">
        <!-- <RoomInfo/> -->
        <div class="room-info py-3 mt-6 ml-6 text-start">
            <!-- header -->
            <div>
                <img class="w-36 mb-6" alt="Vue logo" src="../assets/logo.png">
                <h1>{{ room.name }}</h1>
            </div>
            <!-- Informations -->
            <div class="py-3">
                <h2 class="mb-3">Informations</h2>
                <p>Heure de rendez-vous : <span>{{ room.rdv_hour | onlyHour }}</span></p>
                <p> Lieu de rendez-vous : <span>{{ room.localization_name }}</span> </p>
            </div>
            <!-- Membres  -->
            <div class="py-3">
                <h2 class="mb-3">Membres</h2>
                <p>Fideline</p>
                <p>Coralie</p>
                <p>Dona</p>
            </div>
            <!-- Legende  -->
            <div class="py-3">
                <h2 class="mb-6">Legende</h2>
                <div class=" flex items-center">
                    <img class="w-5" alt="User Marker" src="../assets/img/gray_uMarker.png">
                    <p class="ml-3">Utilisateur</p>
                </div>
                <div class="py-1 flex my-6 items-center">
                    <img class="w-5" alt="User Marker" src="../assets/img/restaurant_marker.png">
                    <p class="ml-3"> Restaurants</p>
                </div>
                <div class="py-1 flex items-center">
                    <img class="w-5" alt="User Marker" src="../assets/img/meet_marker.png">
                    <p class="ml-3">Point de RDV</p>
                </div>
            </div>
        </div>
        <MapComponent/>
    </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue'
//import RoomInfo from '@/components/RoomInfo.vue'

export default {
    components: {
        MapComponent,
        //RoomInfo,
    },
    data() {
        return {
        room: {},
        };
    },
    mounted() {
        this.getRoom();
    },
    methods: {
        async getRoom() {
        const { data, error } = await this.$supabase
            .from('rooms')
            .select()
            .match({ name: this.$route.params.name })
            .single();
        if (data) {
            this.room = data;
        } else {
            console.log(error);
        }
        },
    }
}
</script>

<style>

.room{
    height: 90vh;
    margin-top: 10%;
    overflow: hidden !important;
}
    .room-info{
    width: 30%;
    height: 80%;
    }
</style>