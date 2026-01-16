import { Pencil, Trash2 } from 'lucide-react';
import { memo, useState } from 'react';

type Props = {
    id: number;
    text: string;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
};

const TodoItem = memo(({ id, text, completed, onDelete, onToggle, onUpdate }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    return (
        <li
            className='flex items-center py-2 border-b border-slate-200'>
            <input type="checkbox" className="outline-0 w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:0 focus:ring-brand-soft" checked={completed} onChange={() => onToggle(id)} />
            {/* 🔑 THIS IS THE IMPORTANT PART */}
            {isEditing ? (
                <input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onBlur={() => {
                        onUpdate(id, editText);
                        setIsEditing(false);
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            onUpdate(id, editText);
                            setIsEditing(false);
                        }
                    }}
                    autoFocus
                    className="flex-1 rounded border px-2 py-1 text-sm"
                />
            ) : (
                <label className={`select-none ms-2 text-sm font-medium text-heading ${completed
                    ? 'line-through text-slate-400'
                    : 'text-slate-700'}`}>{text}</label>)}
            <div className='ml-auto flex gap-3'>
                <button aria-label="Edit" className='cursor-pointer' onClick={() => setIsEditing(true)}>
                    <Pencil size={16} />
                </button>
                <button aria-label="Delete" className='cursor-pointer' onClick={() => onDelete(id)}>
                    <Trash2 size={16} />
                </button>
            </div>
        </li>
    );
});

export default TodoItem;