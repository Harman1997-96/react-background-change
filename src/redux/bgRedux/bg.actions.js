import {CHANGE_BG, RESET_BG} from './bg.actionTypes'

let changeBg = () =>{
    return{
        type: CHANGE_BG,
        payload: 'change background'
    }
}

let resetBg = () =>{
    return{
        type: RESET_BG,
        payload: 'reset background'
    }
}

export {changeBg,resetBg}