import React, { createContext, useContext, useEffect, useState } from "react";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "./local-storage.services";

const TodoContext = createContext();
const STORAGE_KEY = "todos";
export const TodoProvider = ({ children }) => {
    const initialValue = getLocalStorageItem(STORAGE_KEY);
    const [todos, setTodos] = useState(initialValue || []);

    /**
     * javascript comment
     * @Date: 2024-02-09 08:51:16
     * @Desc:  this unction add todo in todos list
     */
    const handleAdd = (todoRecord) => {
        setTodos((current) => [...current, todoRecord]);
    };

    /**
     * javascript comment
     * @Date: 2024-02-09 08:52:00
     * @Desc: this function delete todo item with id
     */
    const handleDelete = (todoId) => {
        const filteredData = todos.filter((item) => item.id !== todoId);
        setTodos(filteredData);
    };

    /**
     * javascript comment
     * @Date: 2024-02-09 08:52:46
     * @Desc: this function edit todo and add in local stroage
     */
    const handleEdit = (updateTodo) => {
        const updatedTodos = todos.map((singleTodo) => {
            if (singleTodo.id === updateTodo.id) {
                // Return a new object with the updated properties
                return {
                    id: updateTodo.id,
                    title: updateTodo.title,
                    status: updateTodo.status,
                    isComplete: updateTodo.isComplete,
                    startTime: updateTodo.startTime,
                    endTime: updateTodo.endTime,
                };
            }

            return singleTodo;
        });
        updateTodosBasedOnEndTime(todos, setTodos, STORAGE_KEY);
        setTodos(updatedTodos);
    };

    /**
     * javascript comment
     * @Date: 2024-02-09 08:53:23
     * @Desc: this todo check finish or not for todo
     */

    const handleComplete = (todo) => {
        const updatedTodos = todos.map((singleTodo) => {
            if (singleTodo.id === todo.id) {
                // Check if the current todo's status is "pending"
                if (singleTodo.status === "pending") {
                    console.log("sdfsdfsdfsdfsd");
                    return {
                        ...singleTodo,
                        isComplete: !singleTodo.isComplete, // If status is "pending", set isComplete to true
                        status: "complete", // Update status to "complete"
                    };
                } else {
                    // If status is not "pending", toggle isComplete as before
                    return {
                        ...singleTodo,
                        isComplete: !singleTodo.isComplete,
                        status: !singleTodo.isComplete ? "complete" : "active",
                    };
                }
            }
            return singleTodo;
        });

        setTodos(updatedTodos);
    };

    const updateTodosBasedOnEndTime = (todos, setTodos, storageKey) => {
        const updatedTodos = todos.map((todo) => {
            if (
                new Date(todo.endTime).getTime() - Date.now() <
                    24 * 60 * 60 * 1000 &&
                todo.isComplete === false
            ) {
                return {
                    ...todo,
                    status: "pending",
                };
            } else if (
                new Date(todo.endTime).getTime() - Date.now() <
                    24 * 60 * 60 * 1000 &&
                todo.isComplete === true
            ) {
                return {
                    ...todo,
                    status: "complete",
                };
            } else if (
                new Date(todo.endTime).getTime() - Date.now() >
                    24 * 60 * 60 * 1000 &&
                todo.isComplete === false
            ) {
                return {
                    ...todo,
                    status: "active",
                };
            }
            return todo;
        });

        // Only update state if there are changes
        if (JSON.stringify(updatedTodos) !== JSON.stringify(todos)) {
            setTodos(updatedTodos);
            setLocalStorageItem(storageKey, updatedTodos);
        }
    };

    useEffect(() => {
        updateTodosBasedOnEndTime(todos, setTodos, STORAGE_KEY);
        setLocalStorageItem(STORAGE_KEY, todos);
    }, [todos, STORAGE_KEY]);

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
