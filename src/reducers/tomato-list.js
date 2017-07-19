import {
    ADD_TO_TOMATO_LIST,
    REMOVE_FROM_TOMATO_LIST
} from './../actions/tomato-list'

export default(state = [], action) => {
    switch (action.type) {
        case ADD_TO_TOMATO_LIST:
            return state.concat(action.tomato)
        case REMOVE_FROM_TOMATO_LIST: 
            return Object.assign({}, state, {
                tomatoes: action.tomatoes
            })
        default:
            return state
    }
}