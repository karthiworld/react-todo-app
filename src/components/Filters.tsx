type Filter = 'all' | 'active' | 'completed';

type Props = {
    filter: Filter;
    onChange: (value: Filter) => void;
};


const Filters = ({ filter, onChange }: Props) => {

console.log('Filters component rendered');

    return (
        <div className='flex w-full justify-between items-center mt-6 border-b pb-4'>
            <h4 className='flex  items-center gap-3'>Filters :</h4>
            <div className='flex gap-3'>
                {['all', 'active', 'completed'].map(f => (
                    <button
                        key={f}
                        onClick={() => onChange(f as any)}
                        className={`px-3 py-1.5 rounded-md text-sm ${filter === f
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default Filters;