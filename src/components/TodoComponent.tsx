// src/components/TodoComponent.tsx
import React, { useState } from 'react';

import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';

import { addTodo, toggleTodo, fetchTodos } from '../store/todoSlice';

import { selectCompletedTodos } from '../store/todoSelectors';


const TodoComponent = () => {
  const [newTodo, setNewTodo] = useState('');

  const todos = useSelector((state: RootState) => state.todos.todos);
  
  const dispatch = useDispatch();
  
  const completedTodos = useSelector(selectCompletedTodos);


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Todo List</Text>

      <TextInput
        style={styles.input}
        placeholder="New Todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      
      <Button title="Add Todo" onPress={() => dispatch(addTodo(newTodo))} />

      <Button title="Fetch Todos" onPress={() => dispatch(fetchTodos())} />

      {todos.map((todo) => (
        <Text
          key={todo.id}
          style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
          onPress={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    padding: 5,
  },
});

export default TodoComponent;
