import React from "react";
import { FlatList, View, Text, ViewStyle } from "react-native";
import { Card, Button, Icon, CardProps } from "react-native-elements";
import { Todo } from "../../../actions/types";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
  tasks: Todo[];
  onDeleteTask: (taskId: string) => void;
} & CardProps;

const TaskList: React.FC<Props> = ({ tasks, onDeleteTask, ...rest }) => {
  const renderItem = ({ item }: { item: Todo }) => (
    <Card {...rest}>
      <View style={$containerCards}>
        <Text>{item.title}</Text>
        <View style={$containerButtons}>
          <Button
            style={$cardDelete}
            icon={<Icon name="delete" type="material" color="#ffffff" />}
            onPress={() => onDeleteTask(item.id)}
          />
        </View>
      </View>
    </Card>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const $containerButtons: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
};
const $containerCards: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const $cardDelete: ViewStyle = {
  marginLeft: 10,
};

export default TaskList;
