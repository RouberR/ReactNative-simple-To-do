import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const Addtodo = ({addTodo}) => {
  const [textInput, setTextInput] = useState('');

  const pressHandler = () => {
    textInput.trim() && addTodo(textInput);
    setTextInput('');
  };
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="Введите название задачи..."
        value={textInput}
        onChangeText={setTextInput}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
});
