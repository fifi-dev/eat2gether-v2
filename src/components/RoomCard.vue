<template>
    <div class="room-card m-3 mt-10 text-start bg-white text-gray-900 w-65 p-2 shadow-md max-w-sm relative">
    <div class="h-40 relarive roomImg flex justify-center">
        <img class="h-40 absolute m-auto" alt="Vue logo" v-bind:src="data.imgUrl"> 
    </div>
    <div class="px-5">
    <p class=" font-semibold">{{ data.name }}</p>
    <p>Avec les copains on se retrouve <span class="font-semibold">{{ data.localization_name }}</span> à <span class="font-semibold">{{ data.rdv_hour | onlyHour }}</span></p>
    <button 
    class=" my-3 py-2 px-6 font-semibold  
    bg-blue-500"
    @click="goTo('room')"
    > 👉 Let's go</button>
    </div>
    </div>

    
</template>

<script>
export default {
    name: 'RoomCard',

    props: {
        data: Object,
    },

    methods: {
        goTo(name) {
            this.$router.push({
                name: name,
                params: {
                name: this.data.name,
                },
            });
        },
    }
}
</script>

<style scoped>
.roomImg img{
    top: -20px;
}
</style>