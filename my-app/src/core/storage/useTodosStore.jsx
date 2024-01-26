import create from "zustand";

export const useTodosStore = create((set) => ({
    todos: [],
    addTodo: (newTodo) =>
        set((state) => ({ todos: [...state.todos, newTodo] })),
}));

export default useTodosStore;
