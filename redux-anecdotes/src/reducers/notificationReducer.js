const reducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        case 'CLEAR_NOTIFICATION':
            return ''
        default:
            return state
    }
}

let notifTimeOut

export const setNotification = (notification, timeInSeconds) => {
    return dispatch => {
        dispatch({ type: 'SET_NOTIFICATION', notification })

        if (notifTimeOut !== undefined) {
            clearTimeout(notifTimeOut)
        }

        notifTimeOut = setTimeout(() => {
            dispatch({ type: 'CLEAR_NOTIFICATION' })
        }, (timeInSeconds * 1000))
    }
}

export default reducer;