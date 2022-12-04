<template>
    <div class="home flex justify-center items-center">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div>
        <h1 class="pb-6 pt-4">Les Room</h1>
        <div class="flex justify-center flex-wrap">
            <RoomCard 
            :data="room"
        :key="'room-' + room.id"
        v-for="room in rooms"/>
        </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import RoomCard from '@/components/RoomCard.vue'
//import SnackComponent from '@/components/SnackComponent.vue';
//import { mapActions } from 'vuex';

export default {
    name: 'AllRooms',
    components: {
    // HelloWorld,
    RoomCard,
    //SnackComponent,
    },
    data() {
    return {
        rooms: [],
    }
    },
    mounted() {
    this.getAllRooms();
    },
    methods: {
    /* ...mapActions({
        snack: 'snack/snack',
    }),*/
    async getAllRooms() {
        const { data, error } = await this.$supabase.from('rooms').select();
        if (data) {
        this.rooms = data;
        } else {
        console.log(error);
        }
    },
    /*doSomething() {
        this.snack('This is a snack');
    },*/
    }
}
</script>
