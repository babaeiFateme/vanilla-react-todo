import React, { createContext, useContext, useEffect, useState } from "react";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "../core/services/storage/local-storage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const storageKey = "todos";
    const initialValue = getLocalStorageItem(storageKey);
    const [todos, setTodos] = useState(initialValue || []);

    const handleAdd = (todoRecord) => {
        // setLocalStorageItem(storageKey, todoRecord)
        setTodos((current) => [...current, todoRecord]);
    };

    const handleDelete = (todoId) => {
        const filteredData = todos.filter((item) => item.id !== todoId);
        setTodos(filteredData);
    };

    useEffect(() => {
        setLocalStorageItem(storageKey, todos);
    }, [todos]);

    const value = {
        todos,
        handleAdd,
        handleDelete,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    return useContext(TodoContext);
};
