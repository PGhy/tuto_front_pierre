<template>
<v-layout
    column
    justify-center
    align-center
>
    <v-flex
        xs12
        sm8
        md6
    >
        <div class="text-xs-center">
            <logo />
            <vuetify-logo />
        </div>
        <v-card>
            <v-card-title class="headline">
                Enregistrez vous ! :)
            </v-card-title>
            <v-card-text>
                <form @submit.prevent="registerUser">
                    <v-text-field
                        label="Name"
                        v-model="name"
                        required
                    ></v-text-field>
                        <v-text-field
                        label="Email"
                        v-model="email"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        v-model="password"
                        type="password"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Account-id"
                        v-model="account_id"
                        required
                    ></v-text-field>
                    <v-btn type="submit">
                        Sign up
                    </v-btn>
                    Already Have a account ? Login <nuxt-link to="/login">
                        here
                    </nuxt-link>
                </form>
            </v-card-text>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>

import Logo from '~/components/logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
    components : {
        Logo,
        VuetifyLogo
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            account_id: ''
        }
    },
    methods: {
        /**
         * [registerUser used to register the user]
         * @return {[type]} [none]
         */
        registerUser() {
            this.$axios.post('http://localhost:8000/api/user',{
                name: this.name,
                email: this.email,
                password: this.password,
                account_id: this.account_id
            })
            .then(res => {
                console.log(res)
                this.$router.push('/login')
            })
            .catch(err => {
                alert('error')
                console.log(err)
            })
        }
    }
}
</script>
