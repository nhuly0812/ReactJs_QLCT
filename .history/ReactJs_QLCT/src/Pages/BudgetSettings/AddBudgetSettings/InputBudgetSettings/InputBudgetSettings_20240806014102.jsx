function InputBudgetSettings({ setJob }) {
    //mảng chứa cấu hình cho các trường dữ liệu trên form
    const dataBudgetSettings = [
        {
            label: 'Category',
            type: 'select',
            options: ['Food', 'Transportation','Shopping', 'Entertainment'],
            placeholder: '',
            name: 'category', 
        },
        {
            label: 'Money',
            type: 'number',
            placeholder: '$',
            name: 'budget', 
        },
        {
            label: 'Note',
            type: 'text',
            placeholder: '......',
            name: 'note', 
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
                            name={item.name} // Đặt thuộc tính name
                            className="w-[350px] border-2 px-3 py-2 rounded-lg"
                            onChange={handleChange}
                        >
                            {item.options.map((option,indexOption)=>(
                                <option key={indexOption} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={item.type}
                            placeholder={item.placeholder}
                            name={item.name} // Đặt thuộc tính name
                            className="w-[350px] border-2 px-3 py-2 rounded-lg"
                            onChange={handleChange}
                        />
                    )}
                </div>
            ))}
        </>
    );
}

export default InputBudgetSettings;
