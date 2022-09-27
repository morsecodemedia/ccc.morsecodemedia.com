export const state = () => ({
  showImpairments: false
})

export const mutations = {
  toggleImpairments: (state) => {
    state.showImpairments = !state.showImpairments
  }
}

export const getters = {
  showImpairments: (state) => {
    return state.showImpairments
  }
}
