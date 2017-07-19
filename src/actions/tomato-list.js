export const ADD_TO_TOMATO_LIST = 'ADD_TO_TOMATO_LIST'
export const REMOVE_FROM_TOMATO_LIST = 'REMOVE_FROM_TOMATO_LIST'

export function addToTomatoList(tomato) {
    return {
        type: ADD_TO_TOMATO_LIST,
        tomato
    }
}

export function removeFromTomatoList(tomato) {
    return {
        type: REMOVE_FROM_TOMATO_LIST,
        tomato
    }
}