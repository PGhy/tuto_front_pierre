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
                {{ bienvenue_message }}
            </v-card-title>
            <v-card-text>
                <form @submit.prevent="loginUser">
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
                    <v-btn type="submit">
                        se connecter
                    </v-btn>
                    Vous n'avez pas de compte ? Enregistrez vous <nuxt-link to="/register">
                        ici
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
            bienvenue_message: 'Connectez vous'
        }
    },
    methods: {
        /**
         * [loginUser used to lgin the user]
         * @return {[type]} [none]
         */
        loginUser() {
            this.$axios.post('http://localhost:8000/api/user/login',{
                email: this.email,
                password: this.password
            })
            .then(res => {
                    console.log(res)
                    //
                    //this.$store.commit('login/saveUser', email, this.name )
                    //console.log(store.state.name)
                    //
                    if (res.data != 84) {
                        console.log(res)
                        console.log(res.data.account_id)
                        this.$store.commit('login/saveEmail', res.data.email)
                        this.$store.commit('login/saveName', res.data.name)
                        this.$store.commit('login/saveAccount_id', res.data.account_id)
                        this.$store.commit('login/saveId', res.data.id)
                        this.$router.push('/dashboard')
                    }
                    console.log(this.$auth)
            })
            .catch(err => {
                alert('Wrong email/password')
                // eslint-disable-next-line
                console.log(err)
            })
        }
    }
}
</script>