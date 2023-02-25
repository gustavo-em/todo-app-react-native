import store from "store";
import { combineReducers } from "redux";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default rootReducer;
