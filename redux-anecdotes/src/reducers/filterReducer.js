const reducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export const setFilter = (filter) => {
    return dispatch => {
        dispatch({ type: 'SET_FILTER', filter })
    }
}

export default reducer
