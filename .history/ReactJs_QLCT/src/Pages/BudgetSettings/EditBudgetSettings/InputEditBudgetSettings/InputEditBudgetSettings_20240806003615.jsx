//nhận dữ liệu 
function InputEditBudgetSettings({ job, setJob }) {
    const dataBudgetSettings = [
        {
            label: 'Category',
            type: 'select',
            options: ['Food', 'Transportation', 'Shopping', 'Entertainment'],
            name: 'category',
            placeholder: '',
        },
        {
            label: 'Budget',
            type: 'number',
            name: 'budget',
            placeholder: '$',
        },
        {
            label: 'Note',
            type: 'text',
            name: 'note',
            placeholder: '......',
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob((prevJob) => ({ ...prevJob, [name]: value }));
    };

    return (
        <>
            {dataBudgetSettings.map((item, index) => (
                <div key={index} className="my-2">
                    <label className="">{item.label}</label> <br />
                    {item.type == 'select' ? (
                        <select
                            type={item.type}
                            name={item.name}
                            value={job[item.name] || ''}
                            placeholder={item.placeholder}
                            className="w-[350px] border-2 px-3 py-2 rounded-lg"
                            onChange={handleChange}
                        >
                            {item.options.map((option, indexOption) => (
                                <option key={indexOption} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={item.type}
                            name={item.name}
                            value={job[item.name] || ''}
                            placeholder={item.placeholder}
                            className="w-[350px] border-2 px-3 py-2 rounded-lg"
                            onChange={handleChange}
                        />
                    )}
                </div>
            ))}
        </>
    );
}

export default InputEditBudgetSettings;
