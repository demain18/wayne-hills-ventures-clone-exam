export const state = () => ({ // set state
  step: 1,
})

export const getters = { // get state
  getStep: (state) => {
    return state.step
  },
}

export const mutations = { // update state
  updateStep: (state, stepTarget) => {
    state.step = stepTarget;
  },
}