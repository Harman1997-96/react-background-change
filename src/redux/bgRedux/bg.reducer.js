import { CHANGE_BG, RESET_BG } from './bg.actionTypes'

export const BG_KEY = 'bgStore'

let initialState = {
  color: '#ffffff',
}

let bgReducer = (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
    case CHANGE_BG:
      return {
        color: '#' + Math.random().toString(16).slice(2, 8),
      }

    case RESET_BG:
      return {
        color: '#ffffff',
      }

    default:
      return state
  }
}
export { bgReducer }
