export const state = () => ({
  backgroundColorStore: '#985895',
  textColorStore: '#FCF49F'
})

export const mutations = {
  setBgColorStore: (state, status) => {
    state.backgroundColorStore = status
  },
  setTxtColorStore: (state, status) => {
    state.textColorStore = status
  }
}

export const getters = {
  backgroundColorStore: (state) => {
    return state.backgroundColorStore
  },
  textColorStore: (state) => {
    return state.textColorStore
  }
}
