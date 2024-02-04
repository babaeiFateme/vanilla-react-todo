import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const value = {
        todos,
        addTodo,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    return useContext(TodoContext);
};
