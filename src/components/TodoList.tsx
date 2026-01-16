import { memo } from 'react';
import TodoItem from './TodoItem';
import type { Todo } from '../types/todo';

type Props = {
    todos: Todo[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
};

const TodoList = memo(({ todos, onDelete, onToggle, onUpdate }: Props) => {
    return (
        <ul style={{ marginTop: 16 }}>
            {todos.map(todo => (
                <TodoItem key={todo.id}
                    {...todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onUpdate={onUpdate} />
            ))}
        </ul>
    );
});

export default TodoList;