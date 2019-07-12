<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="headline">
                Profil
        </v-card-title>
        <v-img
          src="http://www.tourisme-aumale-blangy.fr/wp-content/uploads/group-of-people-in-a-formation_icon-icons.com_70476.png"
          aspect-ratio="3"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"> {{ name }} </h3>
            <div> description </div>
            <div> {{ email }} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="red"
                to = "/mes_immeubles">
                immeubles
          </v-btn>
          <v-btn flat color="red"
                to = '/modifier_profil'>
                modifier le profil
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
    data() {
        return {
            name: this.$store.state.login.name,
            email: this.$store.state.login.email
        }
    },
    mounted() {
        this.fetchUserDetails()
    },
    created()
    {
      console.log(this.$store.state.login.name)
    },
    methods: {
    /**
     * [fetchUserDetails used to fetch user details]
     * @return {[type]} [none]
     */
    fetchUserDetails() {
      this.$axios.get('http://localhost:8000/api/user/',{
        //
      })
      .then(res => {
          console.log(res)
      })
      .catch(err => {
              // eslint-disable-next-line
              console.log(err)
          })
    }
    }
}
</script>