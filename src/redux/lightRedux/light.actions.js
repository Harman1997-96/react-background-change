import {FETCH_LIGHT} from './light.actionTypes'

let fetchLight = () =>{
    return{
        type: FETCH_LIGHT,
        payload: 'on light'
    }
}

export {fetchLight}