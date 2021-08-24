import {FETCH_LIGHT} from './light.actionTypes'

export const lightKey = 'lightStore'

let initialState = {
    switch: false
}

let lightReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case FETCH_LIGHT:
            return{
                switch: !state.switch
            }
            default: return state
    }

}

export {lightReducer}