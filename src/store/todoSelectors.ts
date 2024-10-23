// src/store/todoSelectors.ts
import { createSelector } from 'reselect';
import { RootState } from './store';

export const selectTodos = (state: RootState) => state.todos.todos;

export const selectCompletedTodos = createSelector(
  [selectTodos],
  (todos) => todos.filter((todo) => todo.completed)
);
