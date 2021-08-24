
import {combineReducers} from 'redux'

import {bgReducer, BG_KEY} from './bgRedux/bg.reducer'

let rootReducer = combineReducers({
    bgStore : bgReducer
})

export {rootReducer}