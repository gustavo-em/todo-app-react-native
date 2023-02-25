export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

export type TodoAction = AddTodoAction | EditTodoAction | DeleteTodoAction;
