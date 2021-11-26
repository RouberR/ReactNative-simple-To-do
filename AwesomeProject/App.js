import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavBar} from './src/components/NavBar';
import {Addtodo} from './src/components/AddTodo';
import Todo from './src/components/Todo';

const App: () => Node = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <NavBar title="Todo App" />
      <View style={styles.container}>
        <Addtodo addTodo={addTodo} />
        

        <FlatList data={todos}
        keyExtractor={item => item.id}
          renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo} />}
        />


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
