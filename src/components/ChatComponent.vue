<template>
<div class="chat-component bg-black mt-6 relative h-[10rem] w-96 overflow-scroll bg-gray-100">
    <textarea 
    name="text" 
    id="text"
    class="w-100 absolute chat-input bg-indigo-50"
    v-model="text"
    v-on:keyup.enter="sendMessage"></textarea>
</div>
</template>
<script>
    import { supabase } from '../supabase';
    import Snack from '@/components/Snack.vue';
    import { mapActions } from 'vuex';
    export default{
        components: {
        Snack,
        },
        data () {
            return {
                text: "",
            }
        },
        methods: {
        ...mapActions({
            snack: 'snack/snack',
        }),
        sendMessage() {
            this.snack("message :" + this.text);
            console.log("message :" + this.text);
        },
        },
    }
</script>

<style scoped>
.chat-input{
    bottom: 0;
    width: 100%;
}
</style>