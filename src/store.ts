import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchTodos } from "./sagas/todos";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchTodos);

export default store;
