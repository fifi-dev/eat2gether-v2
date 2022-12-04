<template>
   <!-- <div v-if="userInfo.room_id == null" class="text center flex items-center">
        <p>Seulement les membres peuvent voir le contenu</p>
    </div> -->
    <div class="room flex wrap bg-white">
        <!-- <RoomInfo/> -->
        <div class="room-info py-3 mt-6 ml-6 text-start">
            <!-- header -->
            <div class="mt-8">
                <!--<img class="w-36 mb-6" alt="Vue logo" src="../assets/logo.png">--> 
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
                <div class="flex">
                    <div 
                    v-for="member in members" 
                    :key="'member-' + member.id" 
                    class="flex mr-6 items-cente mt-5">
                        <img class=" w-6 mr-3" :src="member.iconUrl" alt="avatar">
                        <p>{{ member.first_name }}</p>
                    </div>
                </div>
                
                
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
            <!-- Chat -->
            <ChatComponent/>
        </div>
        <MapComponent/>
    </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue'
import ChatComponent from '@/components/ChatComponent.vue'
//import RoomInfo from '@/components/RoomInfo.vue'
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';
import { supabase } from '../supabase';
export default {
    components: {
        Snack,
        MapComponent,
        ChatComponent,
        //RoomInfo,
    },
    data() {
        return {
        room: {},
        room_id: '',
        userInfo: {},
        members:{},
        };
    },
    mounted() {
        this.getRoom();
        this.UserInfo();
        
    },
    methods: {
        ...mapActions({
        snack: 'snack/snack',
        }),
        async getRoom() {
        const { data, error } = await this.$supabase
            .from('rooms')
            .select()
            .match({ name: this.$route.params.name })
            .single();
        if (data) {
            this.room = data;
            this.room_id = data.id;
            console.log("l'id de la room :" + this.room_id)
            //this.snack("Il y a : " + data.lenght);
            this.assignRoom() 
            this.getMembers();
        } else {
            this.snack(error);
        }
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
            } else {
                this.snack(error);
            }
        },
        async assignRoom() {
            let user = await supabase.auth.user();
            if ( user.room_id == null ){
                const { data } = await this.$supabase
                .from('users')
                .update({
                    room_id: this.room_id,
                })
                .match({ auth_id: user.id });
                if (data) {
                    this.snack('Room assignné');
                } else {
                    this.snack(error);
                }
            }else{
                console.log ("romm déjà assigné")
            }
        },
        async getMembers(){
            const { data, error } = await this.$supabase
                .from('users')
                .select()
                .match({ room_id: this.room_id })
            if (data) {
                this.members = data;
                console.log(data)
            } else {
                this.snack(error);
            }
        }
    }
}
</script>

<style scoped>
body{
height: 100vh !important;
overflow: hidden !important;
}
.room{
    height: 90vh;
    margin-top: 5%;
    overflow: hidden !important;
}
    .room-info{
    width: 30%;
    height: 80%;
    }
</style>