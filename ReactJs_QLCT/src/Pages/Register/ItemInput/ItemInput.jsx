function ItemInput({ setUser }) {
  // cấu hình các trường dữ liệu
  const dataInput = [
    {
      type: "text",
      placeholder: "Email",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
    },
    {
      type: "password",
      placeholder: "Confirm password",
      name: "confirm",
    },
  
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    //cập nhập lại state vơi s1 obj chứa dữ liệu cũ và dữ liệu mới của trường name
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <>
      {dataInput.map((item, index) => (
        <div className="mb-4" key={index}>
            <input
              className="border-2 rounded-lg w-80 px-4 py-3"
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              onChange={handleChange}
            />
        </div>
      ))}
    </>
  );
}

export default ItemInput;
