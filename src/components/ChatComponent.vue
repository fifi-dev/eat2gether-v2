<template>
<div class="chat-component bg-black mt-6 relative h-[10rem] w-96 overflow-scroll bg-gray-100">
    <div class="text-white p-2" v-for="message in messages" :key="message.id">
        <b>
          {{ message.userName }}
        </b>
        : {{ message.text }}
      </div>
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
                messages: [],
                userInfo: {},
                userName: "",
            }
        },
        mounted() {
            this.UserInfo();
            
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
            sendMessage() {
                this.snack("message :" + this.text);
                console.log("nouveau message de " + this.userName);
                this.addMessage();
            },

            addMessage() {
                const message = {
                    id: new Date().getTime(),
                    text: this.text,
                    userName: this.userName,
                };
            this.messages = this.messages.concat(message);

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