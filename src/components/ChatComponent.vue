<template>
<div class="chat-component mt-6 relative h-[10rem] w-96 overflow-scroll bg-gray-100">
    <div class="messages text-white p-1" v-for="message in messages" :key="message.id">
        <b>
          {{ message.userName }}
        </b>
        : {{ message.text }}
      </div>
    <textarea 
    name="text" 
    id="text"
    class="w-100 bg-black  fixed chat-input bg-indigo-50"
    v-model="text"
    v-on:keyup.enter="sendMessage"></textarea>
</div>
</template>
<script>
    import { supabase } from '../supabase';
    import Snack from '@/components/Snack.vue';
    import { mapActions } from 'vuex';
    import io from "socket.io-client";

    export default{
        components: {
        Snack,
        },
        data () {
            return {
                text: "",
                messages: [],
                userInfo: {},
                userName: "",
            }
        },
        mounted() {
            this.UserInfo();
            this.socketI();
            
        },
        methods: {
            ...mapActions({
                snack: 'snack/snack',
            async UserInfo() {
                let user = await supabase.auth.user();
                const { data, error } = await this.$supabase
                    .from('users')
                    .select()
                    .match({ auth_id: user.id })
                    .single();
                if (data) {
                    this.userInfo = data;
                    this.userName = this.userInfo.first_name;
                } else {
                    this.snack(error);
                }
            },
            }),
            socketI() {
                this.socketInstance = io("http://localhost:3000");
                this.socketInstance.on(
                    "message:received", (data) => {
                    this.messages = this.messages.concat(data);
                    }
                )
            },
            sendMessage() {
                this.addMessage();
                this.text = "";
                this.snack("nouveau message ");
            },
            addMessage() {
                const message = {
                    id: new Date().getTime(),
                    text: this.text,
                    userName: this.userName,
                };
            this.messages = this.messages.concat(message);
            this.socketInstance.emit('message', message);
            },
        },
    }
</script>

<style scoped>
.chat-input{
    bottom: 20px;
    width: 24rem;
}

.chat-component{
    padding-bottom: 10%;
    background-color: black;
}

</style>