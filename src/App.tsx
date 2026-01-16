import './App.css';
import Filters from './components/Filters';
import TodoInput from './components/TodoInput';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import { useEffect, useMemo, useReducer } from 'react';
import { todoReducer, initialState } from './reducer/todoReducer';
import type { Todo } from './types/todo';
import { useDebounce } from './hooks/useDebounce';

const STORAGE_KEY = 'todos';

/**
 * ✅ Lazy initializer
 * Runs BEFORE first render
 * Safely hydrates state from localStorage
 */
const init = () => {
  const storedTodos = localStorage.getItem(STORAGE_KEY);

  if (storedTodos) {
    return {
      ...initialState,
      todos: JSON.parse(storedTodos),
    };
  }

  return initialState;
};

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);
  const debouncedSearch = useDebounce(state.search, 300);


  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
  }, [state.todos]);

  /**
  * ✅ Derived state: search + filter
  */
  const visibleTodos = useMemo(() => {
    return state.todos.filter((todo: Todo) => {
      const matchesSearch = todo.text
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesFilter =
        state.filter === 'all'
          ? true
          : state.filter === 'active'
            ? !todo.completed
            : todo.completed;

      return matchesSearch && matchesFilter;
    });
  }, [state.todos, debouncedSearch, state.filter]);


  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center py-10 w-full">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h1 className="text-xl font-semibold text-slate-800 mb-6 text-center">
          Todo App
        </h1>

        <TodoInput
          onAdd={text =>
            dispatch({ type: 'ADD_TODO', payload: text })
          }
        />

        <SearchBar
          value={state.search}
          onChange={value =>
            dispatch({ type: 'SET_SEARCH', payload: value })
          }
        />

        <Filters
          filter={state.filter}
          onChange={value =>
            dispatch({ type: 'SET_FILTER', payload: value })
          }
        />

        <TodoList
          todos={visibleTodos}
          onDelete={id =>
            dispatch({ type: 'DELETE_TODO', payload: id })
          }
          onToggle={id =>
            dispatch({ type: 'TOGGLE_TODO', payload: id })
          }
          onUpdate={(id, text) =>
            dispatch({
              type: 'EDIT_TODO',
              payload: { id, text },
            })
          }
        />
      </div>
    </div>
  );
};

export default App;
