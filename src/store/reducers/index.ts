//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { combineReducers } from '@reduxjs/toolkit'
import { playerReducer, playerInitialState } from './player'

//----------------------------------------------------------------------------------------------------------------------
// Root Reducer
//----------------------------------------------------------------------------------------------------------------------

const rootReducer = combineReducers({
	player: playerReducer,
})

//----------------------------------------------------------------------------------------------------------------------
// Preloaded Root State
//----------------------------------------------------------------------------------------------------------------------

export const preloadedRootState = {
	player: playerInitialState
}

//----------------------------------------------------------------------------------------------------------------------
// Exports
//----------------------------------------------------------------------------------------------------------------------

export type TRootState = ReturnType<typeof rootReducer>
export default rootReducer
