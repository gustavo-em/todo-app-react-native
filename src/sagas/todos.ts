import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_TODO,
  DELETE_TODO,
  AddTodoAction,
  DeleteTodoAction,
} from "../actions/types";

export function* addTodoSaga(action: AddTodoAction) {
  try {
    // Aqui você pode chamar uma API ou executar qualquer outra lógica assíncrona
    //yield put({ type: ADD_TODO, payload: action.payload });
  } catch (error) {
    console.log(error);
  }
}

export function* deleteTodoSaga(action: DeleteTodoAction) {
  try {
    // Aqui você pode chamar uma API ou executar qualquer outra lógica assíncrona
    //yield put({ type: DELETE_TODO, payload: action.payload });
  } catch (error) {
    console.log(error);
  }
}

export function* watchTodos() {
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
}
