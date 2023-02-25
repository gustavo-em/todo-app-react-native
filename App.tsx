import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, Text } from "react-native";
import store from "./src/store";
import Todo from "./src/screens/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Todo />
      </SafeAreaView>
    </Provider>
  );
}
