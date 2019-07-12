<template>
    <v-card>
        <v-card-title class="headline">
            Modifier votre profil !
        </v-card-title>
        <v-card-text>
            <form @submit.prevent="modifyUser">
                <v-text-field
                    label = "Name"
                    v-model="name"
                ></v-text-field>
                <v-text-field
                    label = "Description"
                    v-model="bio"
                ></v-text-field>
                <v-text-field
                    label = "Email"
                    v-model="email"
                ></v-text-field>
                <v-btn type="submit">
                    Modifier
                </v-btn>
            </form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            bio: '',
            email: '',
        }
    },
    methods: {
        /**
         * [modifyUser used to modify the user]
         * @return {[type]} [none]
         */
        modifyUser() {
            this.$axios.put('http://localhost:8000/api/user/' + this.$store.state.login.id,{
                name: this.name,
                bio: this.bio,
                email: this.email
            })
            .then(res => {
                console.log(res)
                this.$store.commit('login/saveEmail', this.email)
                this.$store.commit('login/saveName', this.name)
                this.$store.commit('login/saveBio', this.bio)
                this.$router.push('/dashboard')
            })
            .catch(err =>{
                console.log(this.$store.login.id)
                console.log(err)
            })
        }
    }
}
</script>