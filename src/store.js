import { createStore } from 'vuex'

const mutations = {
    moreFish(state) {
      state.fishies += 1
      console.log(state.fishies)
    },
    lessFish(state) {
      state.fishies -= 1
      console.log(state.fishies)
    }
  },
  state = {
    fishies: 0,
    fishtypes: {
      octopus: {
        picture: '🐙',
        quantity: 0
      },
      coralfish: {
        picture: '🐠',
        quantity: 0
      },
      bluefish: {
        picture: '🐟',
        quantity: 0
      },
      blowfish: {
        picture: '🐡',
        quantity: 0
      },
      shrimp: {
        picture: '🦐',
        quantity: 0
      }
    }
  }

export default createStore({ mutations, state, strict: true })
