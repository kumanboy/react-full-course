import  { useReducer, useState } from "react";

// Boshlang'ich state funksiyasi
const initialStateFunction = () => {
    return [
        { id: 1, text: "React o'rganish ", completed: false },
        { id: 2, text: "useReducer praktika qilish ", completed: false },
    ];
};

// Reducer funksiyasi
const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], initialStateFunction);
    const [newTodo, setNewTodo] = useState("");

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
                onClick={() => {
                    if (newTodo.trim()) {
                        dispatch({ type: "ADD_TODO", payload: newTodo });
                        setNewTodo("");
                    }
                }}
            >
                Add Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text }
                        <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
                            Toggle
                        </button>
                        <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
