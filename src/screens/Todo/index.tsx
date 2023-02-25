import { DELETE_TODO } from "../../actions/types";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Header } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import AddTask from "./components/AddTask";
import TaskList from "./components/List";

const Todo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todos);

  function handleDeleteTodo(idTodo: string) {
    dispatch({ type: DELETE_TODO, payload: idTodo });
  }

  return (
    <>
      <Header
        centerComponent={{ text: "Todo List", style: { color: "#fff" } }}
        containerStyle={{ backgroundColor: "#007aff" }}
      />
      <View style={$container}>
        <AddTask />
        <TaskList tasks={todos} onDeleteTask={handleDeleteTodo} />
      </View>
    </>
  );
};

const $container: ViewStyle = {
  padding: 20,
};
export default Todo;
