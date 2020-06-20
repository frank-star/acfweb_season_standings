import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

const middlewares = []

const logger = createLogger({
  timestamp: false,
  duration: true,
  collapsed: true
})

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export default createStore(rootReducer, compose(applyMiddleware(thunk, ...middlewares)))
