import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const increment = createAction('counter/increment')
const rootReducer = createReducer(
  {
    count: '0',
  },
  {
    [increment]: (state, payload) => ({ ...state, ...payload }),
  }
)
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export default store
export const persistor = persistStore(store)
