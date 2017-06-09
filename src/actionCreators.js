import { actionTypes } from "./store"
import store from "./store"

const dispatch = store.dispatch

const getId = ((id = 0) => () => id++)()

const removalDelay = 3000

export const addToaster = message => {
  const id = getId()
  const timerId = setTimeout(() => dispatch(startRemoving(id)), removalDelay)
  return {
    type: actionTypes.ADD_TOASTER,
    payload: {
      id,
      timerId,
      message
    }
  }
}

export const startRemoving = id => {
  return {
    type: actionTypes.START_REMOVING,
    id
  }
}

export const removeToaster = (id, timerId) => {
  clearTimeout(timerId) // if removed manually by the user, clear automatic removal
  return {
    type: actionTypes.REMOVE_TOASTER,
    id
  }
}

export const pauseAutomaticToasterRemoval = (id, timerId) => {
  clearTimeout(timerId)
  return {
    type: actionTypes.PAUSE_REMOVAL,
    id: id
  }
}

export const unpauseAutomaticToasterRemoval = id => {
  const timerId = setTimeout(() => dispatch(startRemoving(id)), removalDelay)
  return {
    type: actionTypes.UNPAUSE_REMOVAL,
    id,
    timerId
  }
}
