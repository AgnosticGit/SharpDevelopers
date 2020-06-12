export const actionCreator = (constant) => {
  return {
    started: (payload) => ({ type: constant + '_STARTED', payload }),
    done: (payload) => ({ type: constant + '_DONE', payload }),
    failed: (payload) => ({ type: constant + '_FAILED', payload }),
  }
}

export const simpleAction = (constant) => {
  return (payload) => ({ type: constant, payload })
}

export const newState = (state, payload) => {
  return { ...state, ...payload }
}