import { ADD_TODO } from "../../../actions/types";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTask = () => {
    dispatch({
      type: ADD_TODO,
      payload: { id: uuidv4(), title: text, completed: false },
    });
  };

  return (
    <View>
      <Input
        placeholder="Digite o nome da tarefa"
        value={text}
        onChangeText={setText}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default AddTask;
