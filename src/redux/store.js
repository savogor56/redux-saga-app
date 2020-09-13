import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { postsReducer } from './postsReducer'
import { appReducer } from './appReducer'
import { forbiddenWordsMiddleware } from './middleware'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './sagas'

const reducers = combineReducers({
  postsReducer,
  appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const saga = createSagaMiddleware()

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, forbiddenWordsMiddleware, saga)))

saga.run(sagaWatcher)