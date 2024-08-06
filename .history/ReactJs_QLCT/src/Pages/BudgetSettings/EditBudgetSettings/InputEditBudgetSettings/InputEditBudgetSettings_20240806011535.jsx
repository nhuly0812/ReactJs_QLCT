//nhận dữ liệu 2 props từ component cha
function InputEditBudgetSettings({ job, setJob }) {
    // Cấu hình các trường nhập liệu
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
//xử lý các thay đổi trong form
    const handleChange = (e) => {
        //lấy tên và giá trị từ sự kiện thay đổi
        const { name, value } = e.target;
         // Cập nhật state job bằng cách sao chép các thuộc tính cũ và thay đổi thuộc tính name với giá trị value.
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
                            // name trong job có giá trị thì hiển thị trong input hoặc nếu kh thì hiển thị chuỗi rỗng
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
                            // value={job[item.name] || ''}
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
