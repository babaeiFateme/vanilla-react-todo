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
    const handleComplete = (todo) => {
        console.log(todo);
        const updatedTodos = todos.map((singleTodo) => {
            if (singleTodo.id === todo.id) {
                // Return a new object with the toggled isComplete property
                return {
                    ...singleTodo,
                    isComplete: !singleTodo.isComplete,
                };
            }
            return singleTodo;
        });;
        setTodos(updatedTodos);
    };

    useEffect(() => {
        setLocalStorageItem(storageKey, todos);
    }, [todos]);

    const value = {
        todos,
        handleAdd,
        handleEdit,
        handleDelete,
        handleComplete,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    return useContext(TodoContext);
};
