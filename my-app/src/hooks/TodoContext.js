import React, { createContext, useContext, useEffect, useState } from "react";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "./local-storage.services";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const storageKey = "todos";
    const initialValue = getLocalStorageItem(storageKey);
    const [todos, setTodos] = useState(initialValue || []);

    const handleAdd = (todoRecord) => {
        setTodos((current) => [...current, todoRecord]);
    };

    const handleDelete = (todoId) => {
        const filteredData = todos.filter((item) => item.id !== todoId);
        setTodos(filteredData);
    };
    const handleEdit = (updateTodo) => {
        const filteredData = todos.filter((item) => item.id !== updateTodo.id);
        setTodos(filteredData);
        setTodos((current) => [...current, updateTodo]);
    };

    useEffect(() => {
        setLocalStorageItem(storageKey, todos);
    }, [todos]);

    const value = {
        todos,
        handleAdd,
        handleEdit,
        handleDelete,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    return useContext(TodoContext);
};
