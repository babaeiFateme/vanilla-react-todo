import create from "zustand";

export const useTodosStore = create((set) => ({
    todos: [],
    addTodo: (newTodo) =>
        set((state) => ({ todos: [...state.todos, newTodo] })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));

export default useTodosStore;
