import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import { logger } from 'redux-logger'

export const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            reducer,
            initialState,
            applyMiddleware(sagaMiddleware, logger)
        ),
        runSaga: sagaMiddleware.run
    }
}