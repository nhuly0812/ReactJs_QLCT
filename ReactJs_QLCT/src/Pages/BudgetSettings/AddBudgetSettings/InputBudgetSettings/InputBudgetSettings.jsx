function InputBudgetSettings({ setJob }) {

  const dataBudgetSettings = [
    {
      label: "Category",
      type: "select",
      options: ["Food", "Transportation", "Shopping", "Entertainment"],
      placeholder: "",
      name: "category",
    },
    {
      label: "Budget",
      type: "number",
      placeholder: "budget",
      name: "budget",
    },
    {
      label: "Note",
      type: "text",
      placeholder: "note",
      name: "note",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({...prevJob, [name]: value }));
  };

  return (
    <>
      {dataBudgetSettings.map((item, index) => (
        <div key={index} className="my-2">
          <label className="">{item.label}</label> <br />
          {item.type == "select" ? (
            <select
              name={item.name}
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
              placeholder={item.placeholder}
              name={item.name}
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
