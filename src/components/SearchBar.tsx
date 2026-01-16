import { Search } from 'lucide-react';

type Props = {
    value: string;
    onChange?: (value: string) => void;
};
const SearchBar = ({ value, onChange }: Props) => {
    return (
        <div className='mt-6 relative'>
            <input type="text" placeholder="Search todos..." className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500" value={value} onChange={e => onChange?.(e.target.value)} />
            <Search size={16} className='absolute top-0 bottom-0 right-0 m-auto mr-5 pointer-none' />
        </div>
    );
};

export default SearchBar;