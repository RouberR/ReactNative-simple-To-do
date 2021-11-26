import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Todo = ({todo, removeTodo}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('pressed', todo.id)}
      onLongPress={() => removeTodo(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "steelblue",
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Todo;
