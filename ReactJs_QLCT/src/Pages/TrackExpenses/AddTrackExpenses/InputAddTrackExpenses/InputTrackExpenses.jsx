
function InputTrackExpenses({ setJob }) {
  const dataTrackExpenses = [
    {
      label: 'Status',
      type: 'select',
      options: ['Pending', 'Completed'],
      placeholder: 'Status',
      name: 'status'
    },
    {
      label: 'Category',
      options: ["Food", "Transportation", "Shopping", "Entertainment"],
      type: 'select',
      placeholder: '',
      name: 'category'
    },
    {
      label: 'Budget',
      type: 'number',
      placeholder: 'Budget',
      name: 'amount'
    },
    {
      label: 'Date',
      type: 'date',
      placeholder: '',
      name: 'date'
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
              name={item.name}
              className='w-[350px] border-2 px-3 py-2 rounded-lg'
              onChange={handleChange}
            >
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
