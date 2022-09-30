//----------------------------------------------------------------------------------------------------------------------
// Imports
//----------------------------------------------------------------------------------------------------------------------

import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer, { preloadedRootState } from './reducers'

//----------------------------------------------------------------------------------------------------------------------
// Configure Store
//----------------------------------------------------------------------------------------------------------------------

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
		immutableCheck: false
	}).concat(logger),
	preloadedState: preloadedRootState,
	devTools: process.env.NODE_ENV !== 'production'
})

//----------------------------------------------------------------------------------------------------------------------
// Exports
//----------------------------------------------------------------------------------------------------------------------

export default store
