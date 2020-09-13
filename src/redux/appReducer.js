import { SET_ALERT, TOGGLE_IS_FETCHED } from "./types"


const initilaState = {
  isFetched: false,
  alert: null
}

export const appReducer = (state = initilaState, action) => {
  switch(action.type) {
    case TOGGLE_IS_FETCHED:
      return {
        ...state,
        isFetched: !state.isFetched
      }
      case SET_ALERT:
        return {
          ...state,
          alert: action.payload
        }
    default:
      return state
  }
}