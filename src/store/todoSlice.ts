import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};




export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {

    return new Promise<Todo[]>((resolve) =>
        setTimeout(() => {
            resolve([{ id: 1, task: 'Learn Reeeeedux', completed: false }]);
        }, 1000)
    );
});




const todoSlice = createSlice({

    name: 'todos',

    initialState,

    reducers: {

        addTodo: (state, action: PayloadAction<string>) => {
            console.log(state,action)
            const newTodo = { id: Date.now(), task: action.payload, completed: false };
            state.todos.push(newTodo);
        },

        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },

        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },

    },

    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            // const todoss = action.payload;
            // state.todos.push(...todoss);
            state.todos = action.payload;

        });
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
