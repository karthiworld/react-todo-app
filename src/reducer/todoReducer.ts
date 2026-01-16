import type { Todo } from "../types/todo";

export type Filter = "all" | "active" | "completed";

export type State = {
    todos: Todo[];
    filter: Filter;
    search: string;
};

export type Action =
    | { type: "SET_TODOS"; payload: Todo[] }
    | { type: "ADD_TODO"; payload: string }
    | { type: "DELETE_TODO"; payload: number }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "EDIT_TODO"; payload: { id: number; text: string } }
    | { type: "SET_FILTER"; payload: Filter }
    | { type: "SET_SEARCH"; payload: string };

export const initialState: State = {
    todos: [],
    filter: "all",
    search: "",
};

export function todoReducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_TODOS":
            return { ...state, todos: action.payload };

        case "ADD_TODO":
            if (!action.payload.trim()) return state;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                    },
                ],
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload),
            };

        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.payload ? { ...t, completed: !t.completed } : t
                ),
            };

        case "EDIT_TODO":
            if (!action.payload.text.trim()) return state;
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.payload.id ? { ...t, text: action.payload.text } : t
                ),
            };

        case "SET_FILTER":
            return { ...state, filter: action.payload };

        case "SET_SEARCH":
            return { ...state, search: action.payload };

        default:
            return state;
    }
}
