export const state = () => ({ // set state
  alert: false,
})

export const getters = { // get state
  getAlert: (state) => {
    return state.alert
  },
}

export const mutations = { // update state
  toggleAlert: (state) => {
    state.alert = !state.alert
  },
}