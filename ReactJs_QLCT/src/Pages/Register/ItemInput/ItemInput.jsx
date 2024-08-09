function ItemInput({ setUser }) {
  //cấu hình các trường dữ liệu
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
    {
      type: "checkbox",
      placeholder: "",
      name: "check",
      value: "I accept all terms and conditions",
    },
  ];
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setUser((prevUser) => ({ ...prevUser, [name]: inputValue }));
  };

  return (
    <>
      {dataInput.map((item, index) => (
        <div className="mb-4" key={index}>
          {item.type === "checkbox" ? (
            <label className="text-sm text-[#308BEB]">
              <input
                type={item.type}
                name={item.name}
                checked={item.value ? item.value : false} 
                onChange={handleChange}
              />
              {item.value}
            </label>
          ) : (
            <input
              className="border-2 rounded-lg w-80 px-4 py-3"
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
    </>
  );
}

export default ItemInput;
