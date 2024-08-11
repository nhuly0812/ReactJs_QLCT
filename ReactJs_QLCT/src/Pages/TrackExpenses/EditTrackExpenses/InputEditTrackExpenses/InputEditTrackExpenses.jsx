import React from 'react';

function InputTrackExpenses({ job, setJob }) {
    const dataTrackExpenses = [
        {
            label: 'Status',
            type: 'select',
            options: ['Pending', 'Completed', 'Canceled'],
            name: 'status'
          },
        {
            label: 'Category',
            type: 'select',
            options: ['Food', 'Transportation', 'Shopping', 'Entertainment'],
            name: 'category',
        },
        {
            label: 'Amount',
            type: 'text',
            placeholder: 'Amount',
            name: 'amount',
        },
        {
            label: 'Date',
            type: 'date',
            placeholder: '',
            name: 'date',
        },
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob((prevJob) => ({ ...prevJob, [name]: value }));
    };

    return (
        <>
          {dataTrackExpenses.map((item, index) => (
            <div key={index} className='my-2'>
              <label className=''>{item.label}</label> <br />
              {item.type === 'select' ? (
                <select
                 type={item.type}
                  value={job[item.name] || ''}
                  name={item.name}
                  className='w-[350px] border-2 px-3 py-2 rounded-lg'
                  onChange={handleChange}
                >
                  <option value="">{item.placeholder}</option>
                  {item.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  value={job[item.name] || ''}
                  name={item.name}
                  className='w-[350px] border-2 px-3 py-2 rounded-lg'
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </>
      );
}

export default InputTrackExpenses;
