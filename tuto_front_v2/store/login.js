export const state = () => ({
    email: '',
    name: '',
    account_id: 0,
    id: 0,
    bio: '',
})

export const mutations = {
    saveEmail (state, email) {
        state.email = email
    },
    saveName (state, name) {
        state.name = name
    },
    saveAccount_id (state, account_id) {
        state.account_id = account_id
    },
    saveId (state, id) {
        state.id = id
    },
    saveBio (state, bio) {
        state.bio = bio
    },
    removeUser (state) {
        state.email = '',
        state.name = '',
        state.account_id = 0,
        state.bio = ''
    }
}

/*
export const User = {
    email () {
        return this.$store.state.email
    },
    name () {
        return this.$store.state.name
    }
}
*/