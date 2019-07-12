<template>
  <v-card>
    <v-card-title>
      Vos immeubles
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="immeuble"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [
            {
                text: 'Name',
                align: 'left',
                sortable: false,
                value: 'name'
            },
                { text: 'Id', value: 'id', align: 'center' },
                { text: 'Address', value: 'address', align: 'right' },
            ],
            immeuble: [
                
            ],
        }
    },
    mounted() {
        this.fetchUserDetails()
    },
    /*
    created()
    {
        console.log(this.$store.state.login.name)
    },
    */
    methods: {
    /**
     * [fetchUserDetails used to fetch user details]
     * @return {[type]} [none]
     */
    fetchUserDetails() {
        this.$axios.get('http://localhost:8000/api/immeuble/',{
            
        })
        .then(res => {
            console.log(res)
            this.immeuble = res.data
            consol.log(this.immeuble)
        })
        .catch(err => {
            // eslint-disable-next-line
            console.log(err)
        })
    }
    }
}
</script>