import { useState } from "react";

type Props = {
    onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: Props) => {

    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAdd(value);
        setValue('');
    };

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            <input type="text" placeholder="Add a new todo" className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleAdd} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition outline-0">Add</button>
        </div>
    );
};

export default TodoInput;