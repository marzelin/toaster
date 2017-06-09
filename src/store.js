import { createStore } from "redux"

export const actionTypes = {
  ADD_TOASTER: "ADD_TOASTER",
  REMOVE_TOASTER: "REMOVE_TOASTER",
  PAUSE_REMOVAL: "PAUSE_REMOVAL",
  UNPAUSE_REMOVAL: "UNPAUSE_REMOVAL",
  START_REMOVING: "START_REMOVING"
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TOASTER:
      return [...state, action.payload]
    case actionTypes.START_REMOVING: {
      const { id } = action
      const index = state.findIndex(item => item.id === id)
      if (!~index) {
        return state
      }
      const newItem = { ...state[index], isBeingRemoved: true }
      return state
        .slice(0, index)
        .concat([newItem])
        .concat(state.slice(index + 1))
    }
    case actionTypes.REMOVE_TOASTER:
      const idToRemove = action.id
      return state.filter(({ id }) => id !== idToRemove)
    case actionTypes.PAUSE_REMOVAL: {
      const { id } = action
      const index = state.findIndex(item => item.id === id)
      if (!~index) {
        return state
      }
      const newItem = { ...state[index], timerId: null }
      return state
        .slice(0, index)
        .concat([newItem])
        .concat(state.slice(index + 1))
    }
    case actionTypes.UNPAUSE_REMOVAL: {
      const { id, timerId } = action
      const index = state.findIndex(item => item.id === id)
      if (!~index) {
        return state
      }
      const newItem = { ...state[index], timerId }
      return state
        .slice(0, index)
        .concat([newItem])
        .concat(state.slice(index + 1))
    }
    default:
      return state
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
